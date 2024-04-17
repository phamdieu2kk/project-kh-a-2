import React, { useState, useContext } from "react";
import { useEffect } from "react";
import SliderMenu from "../Components/SliderMenu";
import ProductsFalseSale from "../Components/ProductsFalseSale";
import BestSaleProduct from "../Components/BestSaleProduct";
import { Button } from "antd";
import NewProduct from "../Components/NewProduct";
import Products from "../Components/Products";
import FooterList from "../Components/FooterList";
import News from "../Components/News";
import { NavLink } from "react-router-dom";

const Home = () => {

  //const {totalCart } = useContext(CartContext);
  //console.log("12345"+ totalCart);
  return (
    <>
      <div className="bodywrap">
        <SliderMenu />
        <div className="content">
          <section className="section-chinhsach">
            <div className="container">
              <div className="row swiper-container">
                <div className="col-lg-4 swiper-wrapper">
                  <a className="swiper-slide " title="Miễn phí vận chuyển">
                    <img src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/chinhsach_1.png?1694745247263" />

                    <div className="chinhsach-text">
                      <span className="title">Miễn phí vận chuyển</span>
                      <span className="des">
                        Áp dụng free ship cho tất cả đơn hàng từ 300 nghìn
                      </span>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4  swiper-wrapper">
                  <a className="swiper-slide " title="Đổi trả dễ dàng">
                    <img src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/chinhsach_2.png?1694745247263" />

                    <div className="chinhsach-text">
                      <span className="title">Đổi trả dễ dàng</span>
                      <span className="des">
                        Đổi ngay trong ngày nếu như bánh không đúng yêu cầu
                      </span>
                    </div>
                  </a>
                </div>

                <div className="col-lg-4  swiper-wrapper">
                  <a className="swiper-slide " title="Hỗ trợ nhanh chóng">
                    <img src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/chinhsach_3.png?1694745247263" />

                    <div className="chinhsach-text">
                      <span className="title">Hỗ trợ nhanh chóng</span>
                      <span className="des">
                        Gọi Hotline: 19006750 để được hỗ trợ ngay
                      </span>
                    </div>
                  </a>
                </div>

                <div className="col-lg-4    swiper-wrapper">
                  <a className="swiper-slide " title="Thanh toán đa dạng">
                    <img src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/chinhsach_4.png?1694745247263" />

                    <div className="chinhsach-text">
                      <span className="title">Thanh toán đa dạng</span>
                      <span className="des">
                        Thanh toán khi nhận hàng, Napas, Visa, Chuyển Khoản
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="section-danhmuc">
            <div className="row">
              <div className="col-12 swiper-flex">
                <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                  <div className="outstanding-box">
                    <div className="outstanding-img">
                      <img src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/danhmuc_1.jpg?1694745247263" />
                      <div className="outstanding-detail">
                        <h3>
                          Bánh kếp
                          <br></br>
                          <a href="/outstand" title="Xem ngay">
                            Xem ngay
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-2 col-lg-3 col-md-4 col-6 ">
                  <div className="outstanding-box">
                    <div className="outstanding-img">
                      <img src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/danhmuc_2.jpg?1694745247263" />
                      <div className="outstanding-detail">
                        <h3>
                          Bánh xu kem
                          <br></br>
                          <a href="/outstand" title="Xem ngay">
                            Xem ngay
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-2 col-lg-3 col-md-4 col-6 ">
                  <div className="outstanding-box">
                    <div className="outstanding-img">
                      <img src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/danhmuc_3.jpg?1694745247263" />
                      <div className="outstanding-detail">
                        <h3>
                          Bánh mì nướng
                          <br></br>
                          <a href="/outstand" title="Xem ngay">
                            Xem ngay
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-2 col-lg-3 col-md-4 col-6 ">
                  <div className="outstanding-box">
                    <div className="outstanding-img">
                      <img src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/danhmuc_4.jpg?1694745247263" />
                      <div className="outstanding-detail">
                        <h3>
                          Bánh khác
                          <br></br>
                          <a href="/outstand" title="Xem ngay">
                            Xem ngay
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-flasale">
            <div className="row">
              <div className="col-12 flasale-flex">
                <h3 className="title-flasale">
                  <a className="title-name" href="#" title="Bánh đang giảm giá">
                    Bánh đang giảm giá
                  </a>
                  <br></br>
                  <img src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/title.png?1694745247263" />
                </h3>
                <div className="cout-down">
                  <span>
                    Chương trình đã kết thúc, hẹn gặp lại trong thời gian sớm
                    nhất!
                  </span>
                </div>
                <div className="products-flasale">
                  <ProductsFalseSale />
                </div>
              </div>
            </div>
          </section>

          <section className="section-bestsale">
            <div className="row">
              <div className="col-12 flasale-flex">
                <h3 className="title-flasale">
                  <a className="title-name" href="#" title="Bánh đang giảm giá">
                    Được bán nhiều nhất
                  </a>
                  <br></br>
                  <img src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/title.png?1694745247263" />
                </h3>
                <div className="cout-down" style={{ display: "none" }}>
                  <span>
                    Chương trình đã kết thúc, hẹn gặp lại trong thời gian sớm
                    nhất!
                  </span>
                </div>
                <div className="products-bestsale">
                  <BestSaleProduct />
                </div>
              </div>
            </div>
          </section>

          <section className="section-banner-1">
            <div className="container">
              <a className="thumb-image-banner" href="/" title="Banner">
                <img src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/banner.jpg?1694745247263" />
              </a>
            </div>
            <div className="tranfor"></div>
          </section>

          <section className="section-newproduct">
            <div className="row">
              <div className="col-12 flasale-flex">
                <h3 className="title-flasale">
                  <a className="title-name" href="#" title="Bánh đang giảm giá">
                    Bánh mới Nhất
                  </a>
                  <br></br>
                  <img src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/title.png?1694745247263" />
                </h3>
                <div className="cout-down" style={{ display: "none" }}>
                  <span>
                    Chương trình đã kết thúc, hẹn gặp lại trong thời gian sớm
                    nhất!
                  </span>
                </div>
                <div className="products-newproduct">
                  <NewProduct />
                </div>
              </div>
            </div>
          </section>

          <div className="section-banner-2">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="thumb-banner">
                    <a href="#" title="Bánh nướng và sữa">
                      <img
                        src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/2banner_1.jpg?1694745247263"
                        className="banner-left"
                      />
                    </a>
                  </div>
                  <div className="thumb-content">
                    <h3 className="title">Bánh nướng & Sữa</h3>
                    <p>Vị béo</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="thumb-banner">
                    <a href="#" title="Bánh  và trà">
                      <img
                        src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/2banner_2.jpg?1694745247263"
                        className="banner-right"
                      />
                    </a>
                  </div>
                  <div className="thumb-content">
                    <h3 className="title">Bánh & Trà</h3>
                    <p>Hương vị tươi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="section-product">
            <div className="row">
              <div className="col-12 flasale-flex">
                <h3 className="title-flasale">
                  <a className="title-name" href="#" title="Bánh đang giảm giá">
                    Tất cả bánh
                  </a>
                  <br></br>
                  <img src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/title.png?1694745247263" />
                </h3>
                <div className="cout-down" style={{ display: "none" }}>
                  <span>
                    Chương trình đã kết thúc, hẹn gặp lại trong thời gian sớm
                    nhất!
                  </span>
                </div>
                <div className="products-product">
                  <Products />
                </div>
              </div>
            </div>
          </section>

          <section className="section-about">
            <div className="row">
              <div className="col-md-6">
                <div className="thumb-content-left">
                  <h3 className="title">Bánh Mousse Sữa Chua</h3>
                  <span className="about-content">
                    Những chiếc bánh mousse sữa chua béo thơm, mềm ngọt là món
                    tráng miệng được nhiều người yêu thích trong những ngày oi
                    bức.
                  </span>
                  <div className="about-link">
                    <NavLink 
                      className="about-button"
                      title="Xem ngay"
                      to={"/products"}
                    >
                      Xem Ngay
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="thumb-image-banner">
                  <a title="Bánh Mousse Sữa Chua" href="/products">
                    <img
                      className="image-left"
                      src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/about_1.jpg?1694745247263"
                    />
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="thumb-image-banner">
                  <a title="Bánh Mousse Sữa Chua" href="/products">
                    <img
                      className="image-right"
                      src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/about_2.jpg?1694745247263"
                    />
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="thumb-content-right">
                  <h3 className="title">Bánh Mousse Sữa Chua</h3>
                  <span className="about-content">
                    Những chiếc bánh mousse sữa chua béo thơm, mềm ngọt là món
                    tráng miệng được nhiều người yêu thích trong những ngày oi
                    bức.
                  </span>
                  <div className="about-link">
                  <NavLink 
                      className="about-button"
                      title="Xem ngay"
                      to={"/products"}
                    >
                      Xem Ngay
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className="section-news">
            <div className="row">
              <div className="col-12 flasale-flex">
                <h3 className="title-flasale">
                  <a className="title-name" href="#" title="Tin tức mới nhất">
                    Tin tức mới nhất 
                  </a>
                  <br></br>
                  <img src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/title.png?1694745247263" />
                </h3>
                <div className="cout-down" style={{ display: "none" }}>
                  <span>
                    Chương trình đã kết thúc, hẹn gặp lại trong thời gian sớm
                    nhất!
                  </span>
                </div>
                <div className="news">
                  <News/>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
      <FooterList/>
    </>
  );
};

export default Home;
