import React from "react";
import Slider from "../Components/Slider";
import FooterList from "../Components/FooterList";

import { NavLink } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <>
      <div>
        <Slider title={"Giới thiệu"} />
      </div>
      <div className="content">
        <h1>Đặt đơn hàng thành công!!!</h1>
        <NavLink to="/"> Quay lại Trang chủ</NavLink>
      </div>
      <FooterList/>
    </>
  );
};

export default PaymentSuccess;
