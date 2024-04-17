import React, { useState, useEffect } from "react";
import { Col, Row, Button } from "antd";
import { Progress, Tooltip, Space } from "antd";
import { NavLink } from "react-router-dom";
import _ from "lodash";
import axios from "axios";

const conicColors = { "0%": "#87d068", "50%": "#ffe58f", "100%": "#ffccc7" };

const Dashboard = () => {
  const [productsFalesale, setProductsFalesale] = useState({
    data: null,
    isLoading: false,
  });

  const handledLogout = () => {
    sessionStorage.removeItem("userSesstion");
    window.location.href = "/";
  };

  useEffect(() => {
    (async () => {
      setProductsFalesale((prev) => ({ ...prev, isLoading: true }));
      const { data: _data } = await axios.get("http://localhost:3000/products");
      setProductsFalesale({ data: _data, isLoading: false });
    })();
  }, []);

  //Event Phân trang
  let itemsPerPage = 7;

  const [currentPage, setCurrentPage] = useState(1);

  const pages = _.chunk(productsFalesale.data, itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedProducts = pages[currentPage - 1];

  let render = () => {
    if (paginatedProducts != null) {
      return paginatedProducts.map((item,index) => {
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
              <td className="item-color">{`${item.discount}.000đ`}</td>
              <td className="td-action d-none">
                <NavLink
                  className="item-delete"
                  onClick={() => deleteItem(index)}
                >
                  Xóa
                </NavLink>
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
          <div className="container-full">
            <div className="container-left">
              <div>Số lượng khách hàng</div>
              <div className="user-traffic">
                <label>10.000</label>
              </div>
              <div>
                <Progress percent={60} success={{ percent: 40 }} />
              </div>
            </div>
            <div className="container-right">
              <div>Tổng doanh thu</div>
              <div className="user-traffic">
                <label>102.000.000đ</label>
              </div>
              <div>
                <Progress percent={30} success={{ percent: 70 }} />
              </div>
            </div>
            <div className="container-views">
              <div>Trang hiển thị</div>
              <div>
                <Progress
                  type="circle"
                  percent={93}
                  strokeColor={conicColors}
                />
              </div>
            </div>
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

export default Dashboard;
