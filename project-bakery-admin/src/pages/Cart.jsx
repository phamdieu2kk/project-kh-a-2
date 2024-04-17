import React, { useState, useEffect } from "react";
import { Col, Row, Button } from "antd";
import { NavLink } from "react-router-dom";
import _ from "lodash";
import axios from "axios";

const Cart = () => {
  const [user, setUser] = useState({
    data: null,
    isLoading: false,
  });

  useEffect(() => {
    (async () => {
      setUser((prev) => ({ ...prev, isLoading: true }));
      const { data: _data } = await axios.get("http://localhost:3000/user");
      setUser({ data: _data, isLoading: false });
    })();
  }, []);

  const [cart, setCart] = useState({
    data: null,
    isLoading: false,
  });

  const handledLogout = () => {
    sessionStorage.removeItem("userSesstion");
    window.location.href = "/";
  };

  useEffect(() => {
    (async () => {
      setCart((prev) => ({ ...prev, isLoading: true }));
      const { data: _data } = await axios.get("http://localhost:3000/carts");
      setCart({ data: _data, isLoading: false });
    })();
  }, []);

  //Event Phân trang
  let itemsPerPage = 7;

  const [currentPage, setCurrentPage] = useState(1);

  const pages = _.chunk(cart.data, itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedProducts = pages[currentPage - 1];

  const showUser = (id) => {
    if (user.data != null) {
      const detailUser = user.data.find(
          (item) => item.id === id
        );
      return `${detailUser.firts}  ${detailUser.last_name}`;
    }

  }


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
                  <NavLink to={`/user/${parseInt(item.id_user)}`} title={item.id}>{showUser(parseInt(item.id_user))}
                  </NavLink>
                </div>
              </td>
              <td>
                <div className="title-product">
                  <NavLink
                    to={`/detail-cart/${item.id_user}`}
                    title={item.title}
                    className="product-ititle"
                  >
                    Chi tiết đơn hàng
                  </NavLink>
                </div>
              </td>
              <td className="number-product">
                <div className="counter-number">
                  <label>{`${item.sum_price}.000đ`}</label>
                </div>
              </td>
              <td className="td-action">
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
        <h3>Quản lý Đơn hàng</h3>
          <div className="container-product">
            <div className="product-admin">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" className="">
                      STT
                    </th>
                    <th scope="col" className="product-title">
                      Tên Khách hàng
                    </th>
                    <th scope="col" className="">
                      Đơn hàng
                    </th>
                    <th scope="col" className="product-qty item-center">
                      Tổng đơn hàng
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

export default Cart;
