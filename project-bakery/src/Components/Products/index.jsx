import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiFillHeart,
} from "react-icons/ai";
import { Button, Modal } from "antd";
import _ from "lodash";

const Products = () => {
  const [productsFalesale, setProductsFalesale] = useState({
    data: null,
    isLoading: false,
  });

  useEffect(() => {
    (async () => {
      setProductsFalesale((prev) => ({ ...prev, isLoading: true }));
      const { data: _data } = await axios.get("http://localhost:3000/products");
      setProductsFalesale({ data: _data, isLoading: false });
    })();
  }, []);

  //Ham tim vi tri index
  function findIndexInList(list, conditionFn) {
    for (let i = 0; i < list.length; i++) {
      if (conditionFn(list[i])) {
        return i; // Trả về chỉ số của đối tượng thỏa mãn điều kiện
      }
    }
    return -1; // Trả về -1 nếu không tìm thấy đối tượng thỏa mãn điều kiện
  }

  //Hàm Tăng giảm số lượng
  const onIncrease = (taskId) => {
    let findIndex = findIndexInList(
      productsFalesale.data,
      (item) => item.id === taskId
    );

    //2 tro den vi tri do va thay doi status
    if (findIndex != -1) {
      let newProductsFalesale = [...productsFalesale.data];
      newProductsFalesale[findIndex].product_quantity =
        newProductsFalesale[findIndex].product_quantity + 1;

      //3 set lai state de cap nhap lai giao dien
      setProductsFalesale({ data: newProductsFalesale, isLoading: false });
    }
  };
  const onDecrease = (taskId) => {
    let findIndex = findIndexInList(
      productsFalesale.data,
      (item) => item.id === taskId
    );
    //2 tro den vi tri do va thay doi status
    if (findIndex != -1) {
      if (productsFalesale.data[findIndex].product_quantity > 1) {
        let newProductsFalesale = [...productsFalesale.data];
        newProductsFalesale[findIndex].product_quantity =
          newProductsFalesale[findIndex].product_quantity - 1;

        //3 set lai state de cap nhap lai giao dien
        setProductsFalesale({ data: newProductsFalesale, isLoading: false });
      }
    }
  };

  //Event Phân trang
  let itemsPerPage = 5;

  const [currentPage, setCurrentPage] = useState(1);

  const pages = _.chunk(productsFalesale.data, itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedProducts = pages[currentPage - 1];

  const [cart, setCart] = useState(() => {
    //Lay gio hang tu localStogory neu co hoac tra ve mang rong
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    //Luu gio hang vao localStorage moi khi no thay doi
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  //Event button Cart
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("");
  const [modalImg, setModalImg] = useState("");

  const addCart = (product) => {
    setCart([...cart, product]);
    window.location.reload();
  };
  

  // Tính số lượng sản phẩm trong giỏ hàng
  const cartItemCount = cart.length;

  let render = () => {
    if (paginatedProducts != null) {
      return paginatedProducts.map((item) => {
        //if (item.product_new) {
        return (
          <div className="product-box" key={item.id}>
            <div className="product-img">
              <div className="lable-flex">
                <div
                  className={`discount ${item.discount != 0 ? "" : "d-none"}`}
                >
                  <label>{`${item.discount}%`}</label>
                </div>
                <br></br>
                <div className={`new ${item.product_new ? "" : "d-none"}`}>
                  <label>New</label>
                </div>
                <button className="icons-heart">
                  <div className={`${item.product_like ? "d-none" : ""}`}>
                    <AiOutlineHeart />
                  </div>
                  <div className={`${item.product_like ? "" : "d-none"}`}>
                    <AiFillHeart />
                  </div>
                </button>
              </div>
              <a href={`/products/${item.id}`}>
                <img src={item.images} />
              </a>
            </div>
            <div className="product-detail">
              <div className="product-name">
                <h3>
                  <a href={`/products/${item.id}`}>{item.title}</a>
                </h3>
              </div>
              <div className="price-box">
                <div className="price-new">{`${parseInt(
                  (parseInt(item.price) * (100 - parseInt(item.discount))) / 100
                )}.000đ`}</div>
                <div className="price-old">{`${item.price}.000đ`}</div>
              </div>
              <div className="price-qty">
                <div className="counter-number">
                  <Button onClick={() => onDecrease(item.id)}>-</Button>
                  <label>{item.product_quantity}</label>
                  <Button onClick={() => onIncrease(item.id)}>+</Button>
                </div>
                <div className="btn-cart">
                  <Button className="button-cart" onClick={() => addCart(item)}>
                    <AiOutlineShoppingCart />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
        //}
      });
    }
  };

  return (
    <>
      <div className="product-list">{render()}</div>

      <div className="pagination-product">
        {pages.map((_, index) => (
          <Button
            className="index-pagination"
            key={index}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
      </div>

    </>
  );
};

export default Products;
