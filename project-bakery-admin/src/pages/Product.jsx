import React, { useState, useEffect } from "react";
import { Col, Row, Button } from "antd";
import { NavLink } from "react-router-dom";
import _ from "lodash";
import axios from "axios";
import ProductForm from "../Components/ProductForm";
import ProductService from "../services/ProductService";

const Product = () => {
  const [products, setProducts] = useState({
    data: null,
    isLoading: false,
  });

  const handledLogout = () => {
    sessionStorage.removeItem("userSesstion");
    window.location.href = "/";
  };

  useEffect(() => {
    (async () => {
      setProducts((prev) => ({ ...prev, isLoading: true }));
      const { data: _data } = await axios.get("http://localhost:3000/products");
      setProducts({ data: _data, isLoading: false });
    })();
  }, []);

  //Event Phân trang
  let itemsPerPage = 7;

  const [currentPage, setCurrentPage] = useState(1);

  const pages = _.chunk(products.data, itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedProducts = pages[currentPage - 1];

  //Xoá sản phẩm 
  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:3000/products/${productId}`);
      window.location.reload();
      //fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  let render = () => {
    if (paginatedProducts != null) {
      return paginatedProducts.map((item, index) => {
        //if (item.product_new) {
        return (
          <>
            <tr index={index} key={item.id}>
              <td>{item.id}</td>
              <td className="infor-product">
                <div className="img-product">
                  <NavLink to={`/products/${item.id}`} title={item.title}>
                    <img src={item.images} />
                  </NavLink>
                </div>
              </td>
              <td>
                <div className="title-product">
                  <NavLink
                    to={`/products/${item.id}`}
                    title={item.title}
                    className="product-ititle"
                  >
                    {item.title}
                  </NavLink>
                </div>
              </td>
              <td className="qty-product item-color">{`${item.price}.000đ`}</td>
              <td className="number-product">
                <div className="counter-number">
                  <label>{item.product_quantity}</label>
                </div>
              </td>
              <td className="item-color">{`${item.discount}%`}</td>
              <td className="td-action">
                <div className="link-edit">
                  <NavLink className="item-edit" to ={`/product/${item.id}`}>Sửa</NavLink>
                </div>
                <div className="link-delete">
                  <NavLink
                    className="item-delete"
                    onClick={() => deleteProduct(item.id)}
                  >
                    Xóa
                  </NavLink>
                </div>
              </td>
            </tr>
          </>
        );
        //}
      });
    }
  };

  return (
    <div>
      <Row>
        <Col span={18} push={6}>
          <h3>Quản lý sản phẩm</h3>
          <div className="add-product">
            <Button className="btn-add"><NavLink to={"/add-product"}>Thêm mới </NavLink></Button>
          </div>
          <div className="container-product">
            <div className="product-admin">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" className="">
                      STT
                    </th>
                    <th scope="col" className="product-title">
                      Hình ảnh
                    </th>
                    <th scope="col" className="">
                      Tên Bánh
                    </th>
                    <th scope="col" className="product-qty item-center">
                      Đơn giá
                    </th>
                    <th scope="col" className="product-count ">
                      Số lượng
                    </th>
                    <th scope="col" className="product-sum item-center">
                      Giảm giá{" "}
                    </th>
                    <th scope="col" className="product-action">
                      {" "}
                    </th>
                  </tr>
                </thead>
                <tbody>{render()}</tbody>
              </table>
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
            </div>
          </div>
        </Col>
        <Col span={6} pull={18}>
          <div className="menu">
            <div className="menu-item">
              <NavLink to={"/dashboard"}>Dashboard</NavLink>
            </div>
            <div className="menu-item">
              <NavLink to={"/product"}>Quản lý sản phẩm</NavLink>
            </div>
            <div className="menu-item">
              <NavLink to={"/cart"}>Quản lý Đơn hàng</NavLink>
            </div>
            <div className="menu-item">
              <NavLink to={"/user"}>Quản lý Khách Hàng</NavLink>
            </div>
            <div className="menu-item">
              <NavLink onClick={() => handledLogout()}>Đăng xuất</NavLink>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Product;
