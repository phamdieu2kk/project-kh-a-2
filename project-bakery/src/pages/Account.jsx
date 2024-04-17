import React, { useState, useEffect } from "react";
import Slider from "../Components/Slider";
import FooterList from "../Components/FooterList";
import { NavLink } from "react-router-dom";

const Account = () => {

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
                <span>Thông tin tài khoản</span>
                <br></br>
                <br></br>
                <NavLink to={"/cart-accont"}><span>Đơn hàng của bạn</span></NavLink>
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
              <h1>THÔNG TIN TÀI KHOẢN</h1>
              <span>Họ tên: <label style={{fontWeight:"700"}}>{`${user.firts} ${user.last_name}`}</label></span>
              <br></br>
                <br></br>
              <span>Email: <label style={{fontWeight:"700"}}>{`${user.email}`}</label></span>
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
export default Account;
