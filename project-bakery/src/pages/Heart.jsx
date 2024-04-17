import React from "react";
import Slider from "../Components/Slider";
import FooterList from "../Components/FooterList";
import ProductLoves from "../Components/ProductLoves";
import { NavLink } from "react-router-dom";

const Heart = () => {
  return (
    <>
      <div>
        <Slider title={"Sản phẩm yêu thích"} />
      </div>
      <div className="content">
        <div className="productLove">
        <div className="title-home">
          <NavLink to={"/"} title="Trang chủ">
            Trang chủ
          </NavLink>
          <span>{">"}</span>
          <label>Sản phẩm yêu thích</label>
        </div>
          <ProductLoves />
        </div>
      </div>
      <FooterList />
    </>
  );
};

export default Heart;
