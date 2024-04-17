import React, { useState, useEffect } from "react";
import { Col, Row, Button } from "antd";
import { NavLink } from "react-router-dom";
import _ from "lodash";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Steps } from "antd";

const description = "Tại cửa hàng bánh .";

const DetailCart = () => {
  const params = useParams();
  console.log("id " + params.id);
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

  const [productCart, setProductCart] = useState([]);

  const idProductCart = (id) => {
    if (cart.data != null) {
      const idCartProduct = cart.data.find((item) => item.id_user === id);
      return `${parseInt(idCartProduct.id)}`;
    }
  };

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
      const detailUser = user.data.find((item) => item.id === id);
      return `${detailUser.firts}  ${detailUser.last_name}`;
    }
  };

  const toTal = (id) => {
    if (cart.data != null) {
      const detailUser = cart.data.find((item) => item.id_user === id);
      return `${detailUser.sum_price}.000đ`;
    }
  };
  const showAddress = (id) => {
    if (user.data != null) {
      const detailUser = user.data.find((item) => item.id === id);
      return `${detailUser.adress}`;
    }
  };

  return (
    <div>
      <Row>
        <Col span={18} push={6}>
          <h3 style={{color:"blue"}}>Trạng thái đơn hàng</h3>
          <h4>
            Khách hàng: <span>{showUser(+params.id)}</span>
          </h4>

          <div>
            <h3>Tổng đơn hàng : {toTal(+params.id)}</h3>
          </div>

          <div className="container-product">
            <Steps
              direction="vertical"
              current={1}
              items={[
                {
                  title: "Xác nhận đơn",
                  description,
                },
                {
                  title: "Trạng thái giao hàng",
                  description: `Đang giao hàng đến bưu điện gần  ${showAddress(
                    +params.id
                  )}`,
                },
                {
                  title: "Hoàn thành",
                  description: `Giao đến địa chỉ  [${showAddress(+params.id)}]`,
                },
              ]}
            />
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

export default DetailCart;
