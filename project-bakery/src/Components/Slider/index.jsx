import React from "react";
import "./style.css"
import NavLinks from "../NavLinks";

const Slider = ({title}) => {
  return (
    <div>
      <section className="section-slider">
        <div className="section-img">
          <img src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/breadcrumb.jpg?1694745247263"/>
          
        </div>
        <div className="thumb-slider-slider">
            <div className="slider-content">
              <div className="title-bread-crumb">{title}</div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Slider;
