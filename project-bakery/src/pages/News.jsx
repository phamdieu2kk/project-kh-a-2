import React, { useEffect } from "react";
import Slider from "../Components/Slider";
import FooterList from "../Components/FooterList";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const user = {
  role: "News",
};
const News = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (user.role === "user") {
      navigate("/");
    }
  }, []);
  return (
    <>
      <div>
        <Slider title={"Tin Tức"} />
      </div>
      <div className="content">

      <div className="title-home">
          <NavLink to={"/"} title="Trang chủ">
            Trang chủ
          </NavLink>
          <span>{">"}</span>
          <label>Tin tức</label>
        </div>
        <div
          className="blog_wrapper layout-blog"
          itemScope=""
          itemType="https://schema.org/Blog"
        >
          <meta itemProp="name" content="Tin tức" />
          <meta
            itemProp="description"
            content="Dola Bakery là một tiệm bánh nằm ẩn mình giữa phố xá nhộn nhịp của thành phố. Với bề dày hơn 10 năm kinh nghiệm trong lĩnh vực làm bánh, Dola Bakery đã nhanh chóng trở thành điểm đến lý tưởng cho những ai đam mê bánh ngọt và muốn thưởng thức những món đặc sản tại địa phương."
          />
          <div className="container">
            <h1 className="title-page d-none">
              <span>Tin tức</span>
              <img
                width={202}
                height={20}
                className="lazyload"
                src="//bizweb.dktcdn.net/100/492/035/themes/919334/assets/lazy.png?1694745247263"
                data-src="//bizweb.dktcdn.net/100/492/035/themes/919334/assets/title.png?1694745247263"
                alt="title"
              />
            </h1>
            <div className="row">
              <div className="right-content col-lg-8 col-xl-8 col-12">
                <div className="list-blogs">
                  <div className="row row-fix">
                    <div className=" col-md-6 col-xl-6 col-fix">
                      <div className="item-blog">
                        <div className="block-thumb">
                          <a
                            className="thumb"
                            href="/donut-chi-tu-8k-tai-dola"
                            title="Donut chỉ từ 8k tại Dola"
                          >
                            <img
                              className="lazyload loaded"
                              src="https://bizweb.dktcdn.net/100/492/035/articles/243062617-6096832187058353-42980.png?v=1692242235353"
                              data-src="https://bizweb.dktcdn.net/100/492/035/articles/243062617-6096832187058353-42980.png?v=1692242235353"
                              alt="Donut chỉ từ 8k tại Dola"
                              data-was-processed="true"
                            />
                          </a>
                          <div className="time-post">17/08/2023</div>
                        </div>
                        <div className="block-content">
                          <h3>
                            <a
                              className="line-clamp line-clamp-1"
                              href="/donut-chi-tu-8k-tai-dola"
                              title="Donut chỉ từ 8k tại Dola"
                            >
                              Donut chỉ từ 8k tại Dola
                            </a>
                          </h3>
                          <p className="justify line-clamp line-clamp-3">
                            &nbsp;Nhắc đến bánh Donut, dân sành thưởng thức hẳn
                            không còn xa lạ gì với món ăn vặt rất phổ biến ở các
                            nước phương Tây này. Dù có nguồn...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" col-md-6 col-xl-6 col-fix">
                      <div className="item-blog">
                        <div className="block-thumb">
                          <a
                            className="thumb"
                            href="/croissant-ngan-lop-da-dang-cach-thuong-thuc"
                            title="Croissant ngàn lớp - đa dạng cách thưởng thức"
                          >
                            <img
                              className="lazyload loaded"
                              src="https://bizweb.dktcdn.net/100/492/035/articles/banner-trang-chu-1rs-64a539e43a5.png?v=1692242153870"
                              data-src="https://bizweb.dktcdn.net/100/492/035/articles/banner-trang-chu-1rs-64a539e43a5.png?v=1692242153870"
                              alt="Croissant ngàn lớp - đa dạng cách thưởng thức"
                              data-was-processed="true"
                            />
                          </a>
                          <div className="time-post">17/08/2023</div>
                        </div>
                        <div className="block-content">
                          <h3>
                            <a
                              className="line-clamp line-clamp-1"
                              href="/croissant-ngan-lop-da-dang-cach-thuong-thuc"
                              title="Croissant ngàn lớp - đa dạng cách thưởng thức"
                            >
                              Croissant ngàn lớp - đa dạng cách thưởng thức
                            </a>
                          </h3>
                          <p className="justify line-clamp line-clamp-3">
                            &nbsp;Những chiếc bánh sừng bò với hương bơ thơm béo
                            đặc trưng lại còn đưa miệng với độ giòn xốp, dai dai
                            từ "ngàn" lớp bánh. Nổi bật với hình...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" col-md-6 col-xl-6 col-fix">
                      <div className="item-blog">
                        <div className="block-thumb">
                          <a
                            className="thumb"
                            href="/banh-tart-thom-ngay-khong-the-bo-lo"
                            title="Bánh Tart thơm ngậy không thể bỏ lỡ"
                          >
                            <img
                              className="lazyload loaded"
                              src="https://bizweb.dktcdn.net/100/492/035/articles/244507007-6116411681767070-43207.png?v=1692242112913"
                              data-src="https://bizweb.dktcdn.net/100/492/035/articles/244507007-6116411681767070-43207.png?v=1692242112913"
                              alt="Bánh Tart thơm ngậy không thể bỏ lỡ"
                              data-was-processed="true"
                            />
                          </a>
                          <div className="time-post">17/08/2023</div>
                        </div>
                        <div className="block-content">
                          <h3>
                            <a
                              className="line-clamp line-clamp-1"
                              href="/banh-tart-thom-ngay-khong-the-bo-lo"
                              title="Bánh Tart thơm ngậy không thể bỏ lỡ"
                            >
                              Bánh Tart thơm ngậy không thể bỏ lỡ
                            </a>
                          </h3>
                          <p className="justify line-clamp line-clamp-3">
                            &nbsp;Tart trứng là loại bánh đường phố nổi tiếng ở
                            Hong Kong được rất nhiều người yêu thích. Không
                            những thế, trong bảng xếp hạng 50 loại món ăn
                            ngon...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" col-md-6 col-xl-6 col-fix">
                      <div className="item-blog">
                        <div className="block-thumb">
                          <a
                            className="thumb"
                            href="/banh-dong-lanh-tien-loi-ngon-mieng-de-che-bien"
                            title="Bánh đông lạnh tiện lợi - ngon miệng - Dễ chế biến"
                          >
                            <img
                              className="lazyload loaded"
                              src="https://bizweb.dktcdn.net/100/492/035/articles/252489486-6283379875070249-34680.png?v=1692242014303"
                              data-src="https://bizweb.dktcdn.net/100/492/035/articles/252489486-6283379875070249-34680.png?v=1692242014303"
                              alt="Bánh đông lạnh tiện lợi - ngon miệng - Dễ chế biến"
                              data-was-processed="true"
                            />
                          </a>
                          <div className="time-post">17/08/2023</div>
                        </div>
                        <div className="block-content">
                          <h3>
                            <a
                              className="line-clamp line-clamp-1"
                              href="/banh-dong-lanh-tien-loi-ngon-mieng-de-che-bien"
                              title="Bánh đông lạnh tiện lợi - ngon miệng - Dễ chế biến"
                            >
                              Bánh đông lạnh tiện lợi - ngon miệng - Dễ chế biến
                            </a>
                          </h3>
                          <p className="justify line-clamp line-clamp-3">
                            &nbsp;Bánh đông lạnh đã dần trở thành một sản phẩm
                            quen thuộc cho các Mẹ Đảm sau một thời gian dài giãn
                            cách. Sở dĩ, bánh đông lạnh được nhiều...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" col-md-6 col-xl-6 col-fix">
                      <div className="item-blog">
                        <div className="block-thumb">
                          <a
                            className="thumb"
                            href="/banh-ngot-cac-loai-banh-ngot-duoc-ua-chuong-tai-dola"
                            title="Bánh ngọt - Các loại bánh ngọt được ưa chuộng tại Dola"
                          >
                            <img
                              className="lazyload loaded"
                              src="https://bizweb.dktcdn.net/100/492/035/articles/banh-ngot-a7e7f12b7e484627ad945b.png?v=1692241907540"
                              data-src="https://bizweb.dktcdn.net/100/492/035/articles/banh-ngot-a7e7f12b7e484627ad945b.png?v=1692241907540"
                              alt="Bánh ngọt - Các loại bánh ngọt được ưa chuộng tại Dola"
                              data-was-processed="true"
                            />
                          </a>
                          <div className="time-post">17/08/2023</div>
                        </div>
                        <div className="block-content">
                          <h3>
                            <a
                              className="line-clamp line-clamp-1"
                              href="/banh-ngot-cac-loai-banh-ngot-duoc-ua-chuong-tai-dola"
                              title="Bánh ngọt - Các loại bánh ngọt được ưa chuộng tại Dola"
                            >
                              Bánh ngọt - Các loại bánh ngọt được ưa chuộng tại
                              Dola
                            </a>
                          </h3>
                          <p className="justify line-clamp line-clamp-3">
                            Đối với những người có niềm đam mê với đồ ngọt thì
                            chắc chắn bánh ngọt đã trở thành một phần không thể
                            thiếu. Những chiếc bánh ngọt hớp hồn...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" col-md-6 col-xl-6 col-fix">
                      <div className="item-blog">
                        <div className="block-thumb">
                          <a
                            className="thumb"
                            href="/kham-pha-menu-banh-quy-kho-thom-ngon-dinh-duong-tai-dola"
                            title="Khám phá menu bánh quy khô thơm ngon, dinh dưỡng tại Dola"
                          >
                            <img
                              className="lazyload loaded"
                              src="https://bizweb.dktcdn.net/100/492/035/articles/banh-quy-kho-1-2fb1b85ae77d4ca49.png?v=1692241736700"
                              data-src="https://bizweb.dktcdn.net/100/492/035/articles/banh-quy-kho-1-2fb1b85ae77d4ca49.png?v=1692241736700"
                              alt="Khám phá menu bánh quy khô thơm ngon, dinh dưỡng tại Dola"
                              data-was-processed="true"
                            />
                          </a>
                          <div className="time-post">17/08/2023</div>
                        </div>
                        <div className="block-content">
                          <h3>
                            <a
                              className="line-clamp line-clamp-1"
                              href="/kham-pha-menu-banh-quy-kho-thom-ngon-dinh-duong-tai-dola"
                              title="Khám phá menu bánh quy khô thơm ngon, dinh dưỡng tại Dola"
                            >
                              Khám phá menu bánh quy khô thơm ngon, dinh dưỡng
                              tại Dola
                            </a>
                          </h3>
                          <p className="justify line-clamp line-clamp-3">
                            &nbsp; Bánh quy khô&nbsp;là món ăn thơm ngon, bổ
                            dưỡng, được nhiều người tiêu dùng ưa thích lựa chọn.
                            Không giống những loại bánh khác, bánh quy đặc biệt
                            với hương...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <nav className="clearfix relative nav_pagi w_100 ">
                      <ul className="pagination clearfix">
                        <li className="page-item disabled">
                          <a className="page-link" href="#">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="angle-left"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 192 512"
                              className="svg-inline--fa fa-angle-left fa-w-6"
                            >
                              <path
                                fill="currentColor"
                                d="M4.2 247.5L151 99.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17L69.3 256l118.5 119.7c4.7 4.7 4.7 12.3 0 17L168 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 264.5c-4.7-4.7-4.7-12.3 0-17z"
                                className=""
                              />
                            </svg>
                          </a>
                        </li>
                        <li className="active page-item disabled">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/tin-tuc?page=2">
                            2
                          </a>
                        </li>
                        <li className="page-item hidden-xs">
                          <a className="page-link" href="/tin-tuc?page=2">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="angle-right"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 192 512"
                              className="svg-inline--fa fa-angle-right fa-w-6"
                            >
                              <path
                                fill="currentColor"
                                d="M187.8 264.5L41 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 392.7c-4.7-4.7-4.7-12.3 0-17L122.7 256 4.2 136.3c-4.7-4.7-4.7-12.3 0-17L24 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17z"
                                className=""
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="blog_left_base col-lg-4 col-xl-4">
                <div className="aside-content-menu aside-content-blog">
                  <div className="title-head-col">Danh mục tin tức</div>
                  <nav className="nav-category">
                    <ul className="nav navbar-pills">
                      <li className="nav-item  relative">
                        <a title="Trang chủ" className="nav-link" href="/">
                          Trang chủ
                        </a>
                      </li>
                      <li className="nav-item  relative">
                        <a
                          title="Giới thiệu"
                          className="nav-link"
                          href="/gioi-thieu"
                        >
                          Giới thiệu
                        </a>
                      </li>
                      <li className="nav-item  relative">
                        <a
                          title="Sản phẩm"
                          href="/collections/all"
                          className="nav-link pr-5"
                        >
                          Sản phẩm
                        </a>
                        <i className="open_mnu down_icon" />
                        <ul className="menu_down" style={{ display: "none" }}>
                          <li className="dropdown-submenu nav-item  relative">
                            <a
                              title="Bánh kem"
                              className="nav-link pr-5"
                              href="/banh-kem"
                            >
                              Bánh kem
                            </a>
                            <i className="open_mnu down_icon" />
                            <ul
                              className="menu_down"
                              style={{ display: "none" }}
                            >
                              <li className="nav-item">
                                <a
                                  title="Bánh sinh nhật"
                                  className="nav-link pl-4"
                                  href="/banh-sinh-nhat"
                                >
                                  Bánh sinh nhật{" "}
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  title="Bánh sự kiện"
                                  className="nav-link pl-4"
                                  href="/banh-su-kien"
                                >
                                  Bánh sự kiện{" "}
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  title="Bánh cho trẻ em"
                                  className="nav-link pl-4"
                                  href="/banh-cho-tre-em"
                                >
                                  Bánh cho trẻ em{" "}
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  title="Bánh kem đặt trước"
                                  className="nav-link pl-4"
                                  href="/banh-kem-dat-truoc"
                                >
                                  Bánh kem đặt trước{" "}
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu nav-item  relative">
                            <a
                              title="Bánh mì"
                              className="nav-link pr-5"
                              href="/banh-mi"
                            >
                              Bánh mì
                            </a>
                            <i className="open_mnu down_icon" />
                            <ul
                              className="menu_down"
                              style={{ display: "none" }}
                            >
                              <li className="nav-item">
                                <a
                                  title="Bánh mì kẹp"
                                  className="nav-link pl-4"
                                  href="/banh-mi-kep"
                                >
                                  Bánh mì kẹp{" "}
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  title="Bánh cán lớp"
                                  className="nav-link pl-4"
                                  href="/banh-can-lop"
                                >
                                  Bánh cán lớp{" "}
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  title="Bánh mì gối"
                                  className="nav-link pl-4"
                                  href="/banh-mi-goi"
                                >
                                  Bánh mì gối{" "}
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  title="Bánh mì baguette"
                                  className="nav-link pl-4"
                                  href="/banh-mi-baguette"
                                >
                                  Bánh mì baguette{" "}
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  title="Bánh mì mặn"
                                  className="nav-link pl-4"
                                  href="/banh-mi-man"
                                >
                                  Bánh mì mặn{" "}
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  title="Bánh mì ngọt"
                                  className="nav-link pl-4"
                                  href="/banh-mi-ngot"
                                >
                                  Bánh mì ngọt{" "}
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu nav-item  relative">
                            <a
                              title="Bánh ngọt"
                              className="nav-link pr-5"
                              href="/banh-ngot"
                            >
                              Bánh ngọt
                            </a>
                            <i className="open_mnu down_icon" />
                            <ul
                              className="menu_down"
                              style={{ display: "none" }}
                            >
                              <li className="nav-item">
                                <a
                                  title="Bánh bông lan"
                                  className="nav-link pl-4"
                                  href="/banh-bong-lan"
                                >
                                  Bánh bông lan{" "}
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  title="Bánh Chiffon"
                                  className="nav-link pl-4"
                                  href="/banh-chiffon"
                                >
                                  Bánh Chiffon{" "}
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  title="Bánh cuộn"
                                  className="nav-link pl-4"
                                  href="/banh-cuon"
                                >
                                  Bánh cuộn{" "}
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  title="Bánh su kem"
                                  className="nav-link pl-4"
                                  href="/banh-su-kem"
                                >
                                  Bánh su kem{" "}
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu nav-item  relative">
                            <a
                              title="Bánh tráng miệng"
                              className="nav-link pr-5"
                              href="/banh-trang-mieng"
                            >
                              Bánh tráng miệng
                            </a>
                            <i className="open_mnu down_icon" />
                            <ul
                              className="menu_down"
                              style={{ display: "none" }}
                            >
                              <li className="nav-item">
                                <a
                                  title="Bánh miếng"
                                  className="nav-link pl-4"
                                  href="/banh-mieng"
                                >
                                  Bánh miếng{" "}
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  title="Bánh mousse"
                                  className="nav-link pl-4"
                                  href="/banh-mousse"
                                >
                                  Bánh mousse{" "}
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  title="Tiramisu/ Caramel/ Sữa chua"
                                  className="nav-link pl-4"
                                  href="/tiramisu-caramel-sua-chua"
                                >
                                  Tiramisu/ Caramel/ Sữa chua{" "}
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  title="Panna cotta & Pudding"
                                  className="nav-link pl-4"
                                  href="/panna-cotta-pudding"
                                >
                                  Panna cotta &amp; Pudding{" "}
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu nav-item  relative">
                            <a
                              title="Bánh khô"
                              className="nav-link pr-5"
                              href="/banh-kho"
                            >
                              Bánh khô
                            </a>
                            <i className="open_mnu down_icon" />
                            <ul
                              className="menu_down"
                              style={{ display: "none" }}
                            >
                              <li className="nav-item">
                                <a
                                  title="Bánh quy"
                                  className="nav-link pl-4"
                                  href="/banh-quy"
                                >
                                  Bánh quy{" "}
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  title="Bánh mì nướng"
                                  className="nav-link pl-4"
                                  href="/banh-mi-nuong"
                                >
                                  Bánh mì nướng{" "}
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  title="Bánh sừng bò mini"
                                  className="nav-link pl-4"
                                  href="/banh-sung-bo-mini"
                                >
                                  Bánh sừng bò mini{" "}
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu nav-item  relative">
                            <a
                              title="Bánh đông lạnh"
                              className="nav-link pr-5"
                              href="/banh-dong-lanh"
                            >
                              Bánh đông lạnh
                            </a>
                            <i className="open_mnu down_icon" />
                            <ul
                              className="menu_down"
                              style={{ display: "none" }}
                            >
                              <li className="nav-item">
                                <a
                                  title="Bánh bao"
                                  className="nav-link pl-4"
                                  href="/banh-bao"
                                >
                                  Bánh bao{" "}
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  title="Bánh pizza"
                                  className="nav-link pl-4"
                                  href="/banh-pizza"
                                >
                                  Bánh pizza{" "}
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown-submenu nav-item  relative">
                            <a
                              title="Bánh theo mùa"
                              className="nav-link pr-5"
                              href="/banh-theo-mua"
                            >
                              Bánh theo mùa
                            </a>
                            <i className="open_mnu down_icon" />
                            <ul
                              className="menu_down"
                              style={{ display: "none" }}
                            >
                              <li className="nav-item">
                                <a
                                  title="Bánh quy Tết"
                                  className="nav-link pl-4"
                                  href="/banh-quy-tet"
                                >
                                  Bánh quy Tết{" "}
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  title="Bánh Trung thu"
                                  className="nav-link pl-4"
                                  href="/banh-trung-thu"
                                >
                                  Bánh Trung thu{" "}
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  title="Bánh Quy Noel"
                                  className="nav-link pl-4"
                                  href="/banh-quy-noel"
                                >
                                  Bánh Quy Noel{" "}
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  title="Bánh Kem Noel"
                                  className="nav-link pl-4"
                                  href="/banh-kem-noel"
                                >
                                  Bánh Kem Noel{" "}
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <a
                              title="Đồ uống"
                              className="nav-link"
                              href="/do-uong"
                            >
                              Đồ uống
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item active relative">
                        <a title="Tin tức" className="nav-link" href="/tin-tuc">
                          Tin tức
                        </a>
                      </li>
                      <li className="nav-item  relative">
                        <a title="Liên hệ" className="nav-link" href="/lien-he">
                          Liên hệ
                        </a>
                      </li>
                      <li className="nav-item  relative">
                        <a
                          title="Hệ thống cửa hàng"
                          className="nav-link"
                          href="/he-thong-cua-hang"
                        >
                          Hệ thống cửa hàng
                        </a>
                      </li>
                      <li className="nav-item  relative">
                        <a
                          title="Câu hỏi thường gặp"
                          className="nav-link"
                          href="/cau-hoi-thuong-gap"
                        >
                          Câu hỏi thường gặp
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="blog_noibat">
                  <h2 className="h2_sidebar_blog">
                    <a href="/tin-tuc" title="Tin tức nổi bật">
                      Tin tức nổi bật
                    </a>
                  </h2>
                  <div className="blog_content">
                    <div className="item clearfix">
                      <div className="post-thumb">
                        <a
                          className="image-blog scale_hover"
                          href="/donut-chi-tu-8k-tai-dola"
                          title="Donut chỉ từ 8k tại Dola"
                        >
                          <img
                            className="img_blog lazyload loaded"
                            src="https://bizweb.dktcdn.net/100/492/035/articles/243062617-6096832187058353-42980.png?v=1692242235353"
                            data-src="https://bizweb.dktcdn.net/100/492/035/articles/243062617-6096832187058353-42980.png?v=1692242235353"
                            alt="Donut chỉ từ 8k tại Dola"
                            data-was-processed="true"
                          />
                        </a>
                        <span className="num">1</span>
                      </div>
                      <div className="contentright">
                        <h3>
                          <a
                            title="Donut chỉ từ 8k tại Dola"
                            href="/donut-chi-tu-8k-tai-dola"
                          >
                            Donut chỉ từ 8k tại Dola
                          </a>
                        </h3>
                        <div className="time-post">17/08/2023</div>
                      </div>
                    </div>
                    <div className="item clearfix">
                      <div className="post-thumb">
                        <a
                          className="image-blog scale_hover"
                          href="/croissant-ngan-lop-da-dang-cach-thuong-thuc"
                          title="Croissant ngàn lớp - đa dạng cách thưởng thức"
                        >
                          <img
                            className="img_blog lazyload loaded"
                            src="https://bizweb.dktcdn.net/100/492/035/articles/banner-trang-chu-1rs-64a539e43a5.png?v=1692242153870"
                            data-src="https://bizweb.dktcdn.net/100/492/035/articles/banner-trang-chu-1rs-64a539e43a5.png?v=1692242153870"
                            alt="Croissant ngàn lớp - đa dạng cách thưởng thức"
                            data-was-processed="true"
                          />
                        </a>
                        <span className="num">2</span>
                      </div>
                      <div className="contentright">
                        <h3>
                          <a
                            title="Croissant ngàn lớp - đa dạng cách thưởng thức"
                            href="/croissant-ngan-lop-da-dang-cach-thuong-thuc"
                          >
                            Croissant ngàn lớp - đa dạng cách thưởng thức
                          </a>
                        </h3>
                        <div className="time-post">17/08/2023</div>
                      </div>
                    </div>
                    <div className="item clearfix">
                      <div className="post-thumb">
                        <a
                          className="image-blog scale_hover"
                          href="/banh-tart-thom-ngay-khong-the-bo-lo"
                          title="Bánh Tart thơm ngậy không thể bỏ lỡ"
                        >
                          <img
                            className="img_blog lazyload loaded"
                            src="https://bizweb.dktcdn.net/100/492/035/articles/244507007-6116411681767070-43207.png?v=1692242112913"
                            data-src="https://bizweb.dktcdn.net/100/492/035/articles/244507007-6116411681767070-43207.png?v=1692242112913"
                            alt="Bánh Tart thơm ngậy không thể bỏ lỡ"
                            data-was-processed="true"
                          />
                        </a>
                        <span className="num">3</span>
                      </div>
                      <div className="contentright">
                        <h3>
                          <a
                            title="Bánh Tart thơm ngậy không thể bỏ lỡ"
                            href="/banh-tart-thom-ngay-khong-the-bo-lo"
                          >
                            Bánh Tart thơm ngậy không thể bỏ lỡ
                          </a>
                        </h3>
                        <div className="time-post">17/08/2023</div>
                      </div>
                    </div>
                    <div className="item clearfix">
                      <div className="post-thumb">
                        <a
                          className="image-blog scale_hover"
                          href="/banh-dong-lanh-tien-loi-ngon-mieng-de-che-bien"
                          title="Bánh đông lạnh tiện lợi - ngon miệng - Dễ chế biến"
                        >
                          <img
                            className="img_blog lazyload loaded"
                            src="https://bizweb.dktcdn.net/100/492/035/articles/252489486-6283379875070249-34680.png?v=1692242014303"
                            data-src="https://bizweb.dktcdn.net/100/492/035/articles/252489486-6283379875070249-34680.png?v=1692242014303"
                            alt="Bánh đông lạnh tiện lợi - ngon miệng - Dễ chế biến"
                            data-was-processed="true"
                          />
                        </a>
                        <span className="num">4</span>
                      </div>
                      <div className="contentright">
                        <h3>
                          <a
                            title="Bánh đông lạnh tiện lợi - ngon miệng - Dễ chế biến"
                            href="/banh-dong-lanh-tien-loi-ngon-mieng-de-che-bien"
                          >
                            Bánh đông lạnh tiện lợi - ngon miệng - Dễ chế biến
                          </a>
                        </h3>
                        <div className="time-post">17/08/2023</div>
                      </div>
                    </div>
                    <div className="item clearfix">
                      <div className="post-thumb">
                        <a
                          className="image-blog scale_hover"
                          href="/banh-ngot-cac-loai-banh-ngot-duoc-ua-chuong-tai-dola"
                          title="Bánh ngọt - Các loại bánh ngọt được ưa chuộng tại Dola"
                        >
                          <img
                            className="img_blog lazyload loaded"
                            src="https://bizweb.dktcdn.net/100/492/035/articles/banh-ngot-a7e7f12b7e484627ad945b.png?v=1692241907540"
                            data-src="https://bizweb.dktcdn.net/100/492/035/articles/banh-ngot-a7e7f12b7e484627ad945b.png?v=1692241907540"
                            alt="Bánh ngọt - Các loại bánh ngọt được ưa chuộng tại Dola"
                            data-was-processed="true"
                          />
                        </a>
                        <span className="num">5</span>
                      </div>
                      <div className="contentright">
                        <h3>
                          <a
                            title="Bánh ngọt - Các loại bánh ngọt được ưa chuộng tại Dola"
                            href="/banh-ngot-cac-loai-banh-ngot-duoc-ua-chuong-tai-dola"
                          >
                            Bánh ngọt - Các loại bánh ngọt được ưa chuộng tại
                            Dola
                          </a>
                        </h3>
                        <div className="time-post">17/08/2023</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <FooterList />
      </div>
    </>
  );
};

export default News;
