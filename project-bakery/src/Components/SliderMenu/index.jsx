import React from "react";
import "./style.css";

const SliderMenu = () => {
  return (
    <div>
      <section className="section-slider">
        <div className="section-img">
          <img src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/slider_1.jpg?1694745247263" />
        </div>
        <div className="thumb-slider">
          <div className="slider-text">
            <h2 className="title-slider">Bánh tươi mỗi ngày</h2>
            <div className="slider-content">
              Giảm đến 20% khi đặt hàng qua web
            </div>
            <a className="slider-button" title="Xem ngay" href="#">
              Xem Ngay
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SliderMenu;
