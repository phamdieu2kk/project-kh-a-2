import React, { useState, useEffect } from "react";
import Slider from "../Components/Slider";
import FooterList from "../Components/FooterList";
import { NavLink } from "react-router-dom";

const CartAccout = () => {

  const userSesstion = sessionStorage.getItem("userSesstion");

  let render = () => {
    if (userSesstion != null) {
      const user =  JSON.parse(userSesstion);
        return (
          <>
             <div className="col-xs-12 col-sm-12 col-lg-9 col-left-ac">
                <h1>TRANG TÀI KHOẢN</h1>
                <span>Xin chào<label style={{color:"red"}}>{`${user.firts} ${user.last_name}`}!</label></span>
                <br></br>
                <br></br>
                <NavLink to={"/accont"}><span>Thông tin tài khoản</span></NavLink>
                <br></br>
                <br></br>
                <NavLink><span>Đơn hàng của bạn</span></NavLink>
                <br></br>
                <br></br>
                <NavLink><span>Đổi mật khẩu</span></NavLink>
                <br></br>
                <br></br>
                <NavLink><span>Số địa chỉ</span></NavLink>
                <br></br>
                <br></br>
              </div>
              <div className="col-xs-12 col-sm-12 col-lg-9 col-right-ac">
              <h1>ĐƠN HÀNG CỦA BẠN</h1>
              <div className="container cartpcstyle">
          <div className="row">
            <div className="col-12">
              <div className="cart-page">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="cart-title">
                        Thông tin sản phẩm
                      </th>
                      <th scope="col" className="cart-qty item-center">
                        Đơn giá
                      </th>
                      <th scope="col" className="cart-count ">
                        Số lượng
                      </th>
                      <th scope="col" className="cart-sum item-center">
                        Thành tiền{" "}
                      </th>
                      <th scope="col" className="cart-action">
                        {" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <td 
                    >
                      Không có sản phẩm nào trong giỏ hàng !
                    </td>
                  </tbody>
                </table>
              </div>
              <div className="payment-infor">
                <div className="cart-sum-price">
                  <label>Tổng tiền: </label>
                  <span className="label-totalprice"></span>
                </div>
                <div className="btn-payment">
                  <NavLink
                    className="cart-lable"
                    title="Thanh Toán"
                    to={"/payment"}
                  >
                    Thanh Toán
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
            </div>
              
          </>
        );
      };
  };
  return (
    <>
      <div>
        <Slider title={"Thông tin tài khoản"} />
      </div>
      <div className="content">
        <div className="container">
          <div className="row" style={{display: "flex"}}>
           
             {render()}
          </div>
        </div>
      </div>
      <FooterList />
    </>
  );

  }
export default CartAccout;
