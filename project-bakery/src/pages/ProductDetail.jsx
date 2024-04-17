import React, { useEffect, useState } from "react";
import Slider from "../Components/Slider";
import FooterList from "../Components/FooterList";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const params = useParams();
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);

  const [products, setProducts] = useState();
  const [productDetail, setProductDetail] = useState();

  useEffect(() => {
    (async () => {
      const rs = await axios.get("http://localhost:3000/products");
      const result = rs.data?.filter((item) => item.id == params.id);
      setProductDetail(result);
    })();
  }, []);

  console.log(productDetail);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <div>
        <Slider title={"Chi tiết sản phẩm"} />
        <div className="content">

        {productDetail?.map((data) => (
          <section className="product layout-product">
            <div className="container">
              <div className="row">
                <div className="col-12 col-xl-12">
                  <div className="details-product">
                    <div className="row">
                      <div className="product-detail-left product-images col-12 col-md-12 col-lg-6 col-xl-5">
                        <div className="product-image-block">
                          <div className="swiper-container gallery-top swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                            <div className="swiper-wrapper" id="lightgallery">
                              <a
                                className="swiper-slide swiper-slide-active"
                                title="Click để xem"
                                style={{ width: "512px" }}
                              >
                                <img
                                  height="400"
                                  width="400"
                                  src={data?.images}
                                  alt={data?.title}
                                  data-image={data?.images}
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-12 col-lg-6 col-xl-7">
                        <div className="details-pro">
                          <h1 className="title-product">{data?.title}</h1>
                          <div className="inventory_quantity">
                            <div className="thump-break">
                              <span className="mb-break type">
                                <span className="stock-brand-title">Loại:</span>
                                <span className="a-vendor">Bánh miếng</span>
                              </span>
                              <span className="mb-break inventory">
                                <span className="stock-brand-title">
                                  Tình trạng:
                                </span>
                                <span className="a-stock">Còn hàng</span>
                              </span>
                            </div>
                          </div>
                          <div className="reviews_details_product "></div>
                          <form
                            encType="multipart/form-data"
                            data-cart-form=""
                            id="add-to-cart-form"
                            action="/cart/add"
                            method="post"
                            className="form-inline"
                            style={{ width: "100%" }}
                          >
                            <div className="price-box clearfix">
                              <div className="special-price">
                                <span className="price product-price">
                                  {(
                                    (data?.price * (100 - data?.discount)) /
                                    100
                                  ).toLocaleString()}
                                  .000₫
                                </span>
                              </div>
                            </div>
                            <div className="form-product">
                              <div className=" ">
                                <div className="flex-quantity">
                                  <div className="custom custom-btn-number show">
                                    <label className="sl section">
                                      Số lượng:
                                    </label>
                                    <div className="input_number_product form-control">
                                      <button
                                        className="btn_num num_1 button button_qty"
                                        type="button"
                                      >
                                        -
                                      </button>
                                      <input
                                        type="text"
                                        name="quantity"
                                        value="1"
                                        maxLength="3"
                                        className="form-control prd_quantity"
                                      />
                                      <button
                                        className="btn_num num_2 button button_qty"
                                        type="button"
                                      >
                                        +
                                      </button>
                                    </div>
                                  </div>
                                  <div className="btn-mua button_actions ">
                                    <button
                                      type="submit"
                                      className="btn btn_base normal_button btn_add_cart add_to_cart btn-cart"
                                    >
                                      <span className="icon">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          id="Layer_1"
                                          data-name="Layer 1"
                                          viewBox="0 0 40 40"
                                        >
                                          <defs></defs>
                                          <g>
                                            <path
                                              className="cls-1"
                                              d="M35.91,36.17,33.24,10.75a1,1,0,0,0-1-.94h-5V8.67a6.47,6.47,0,1,0-12.93,0V9.81h-5a1.05,1.05,0,0,0-1,.94L5.52,36.17a1,1,0,0,0,.93,1.15H34.87a1,1,0,0,0,1.05-1A.41.41,0,0,0,35.91,36.17ZM16.35,8.67a4.38,4.38,0,1,1,8.75,0V9.81H16.35ZM7.73,35.24l2.45-23.33h4.07v2.3a1,1,0,0,0,1,1.09,1,1,0,0,0,1.09-1V11.91H25.1v2.3a1,1,0,0,0,1,1.09,1,1,0,0,0,1.09-1V11.91h4.07l2.45,23.33Z"
                                            ></path>
                                          </g>
                                        </svg>
                                      </span>
                                      <span className="text">
                                        <span className="txt-main text_1">
                                          Thêm vào giỏ
                                        </span>
                                        <span className="text_2">
                                          Giao hàng tận nơi miễn phí
                                        </span>
                                      </span>
                                    </button>
                                    <a
                                      href=""
                                      className="btn-wishlist setWishlistProduct"
                                      data-wish="ba-nh-red-velvet-90g"
                                      tabIndex="0"
                                      title="Thêm vào yêu thích"
                                    >
                                      <span className="icon">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 512 512"
                                        >
                                          <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"></path>
                                        </svg>
                                      </span>
                                      <span className="text">
                                        <span className="txt-main text_1">
                                          Yêu thích
                                        </span>
                                        <span className="text_2">
                                          Thêm vào yêu thích để lưu lại bạn nhé!
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                          <div className="khuyen-mai">
                            <div className="title">
                              <img
                                width="64"
                                height="64"
                                src="//bizweb.dktcdn.net/100/492/035/themes/919334/assets/giftbox.png?1694745247263"
                                alt="voucher"
                              />
                              <span>Khuyến mãi đặc biệt !!!</span>
                            </div>
                            <div className="content">
                              <ul>
                                <li>
                                  <img
                                    width="20"
                                    height="20"
                                    src="//bizweb.dktcdn.net/100/492/035/themes/919334/assets/km_product1.png?1694745247263"
                                    alt="Áp dụng Phiếu quà tặng/ Mã giảm giá theo ngành hàng."
                                  />
                                  Áp dụng Phiếu quà tặng/ Mã giảm giá theo ngành
                                  hàng.
                                </li>
                                <li>
                                  <img
                                    width="20"
                                    height="20"
                                    src="//bizweb.dktcdn.net/100/492/035/themes/919334/assets/km_product2.png?1694745247263"
                                    alt="Giảm giá 10% khi mua từ 5 sản phẩm trở lên."
                                  />
                                  Giảm giá 10% khi mua từ 5 sản phẩm trở lên.
                                </li>
                                <li>
                                  <img
                                    width="20"
                                    height="20"
                                    src="//bizweb.dktcdn.net/100/492/035/themes/919334/assets/km_product3.png?1694745247263"
                                    alt="Tặng 100.000₫ mua hàng tại website thành viên Dola Fashion Accessories, áp dụng khi mua Online tại Hồ Chí Minh và 1 số khu vực khác."
                                  />
                                  Tặng 100.000₫ mua hàng tại website thành viên
                                  Dola Fashion Accessories, áp dụng khi mua
                                  Online tại Hồ Chí Minh và 1 số khu vực khác.
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="chinhsach-pro row row-fix">
                            <div className="col-12 col-md-6 col-lg-12 col-xl-6 col-fix">
                              <div className="item">
                                <img
                                  width="40"
                                  height="40"
                                  src="//bizweb.dktcdn.net/100/492/035/themes/919334/assets/chinhsach_1.png?1694745247263"
                                  alt="Miễn phí vận chuyển"
                                />
                                <div className="text">
                                  <span className="title">
                                    Miễn phí vận chuyển
                                  </span>
                                  <span className="des">
                                    Áp dụng free ship cho tất cả đơn hàng từ 300
                                    nghìn
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-12 col-xl-6 col-fix">
                              <div className="item">
                                <img
                                  width="40"
                                  height="40"
                                  src="//bizweb.dktcdn.net/100/492/035/themes/919334/assets/chinhsach_2.png?1694745247263"
                                  alt="Đổi trả dễ dàng"
                                />
                                <div className="text">
                                  <span className="title">Đổi trả dễ dàng</span>
                                  <span className="des">
                                    Đổi ngay trong ngày nếu như bánh không đúng
                                    yêu cầu
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-12 col-xl-6 col-fix">
                              <div className="item">
                                <img
                                  width="40"
                                  height="40"
                                  src="//bizweb.dktcdn.net/100/492/035/themes/919334/assets/chinhsach_3.png?1694745247263"
                                  alt="Hỗ trợ nhanh chóng"
                                />
                                <div className="text">
                                  <span className="title">
                                    Hỗ trợ nhanh chóng
                                  </span>
                                  <span className="des">
                                    Gọi Hotline: 19006750 để được hỗ trợ ngay
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-12 col-xl-6 col-fix">
                              <div className="item">
                                <img
                                  width="40"
                                  height="40"
                                  src="//bizweb.dktcdn.net/100/492/035/themes/919334/assets/chinhsach_4.png?1694745247263"
                                  alt="Thanh toán đa dạng"
                                />
                                <div className="text">
                                  <span className="title">
                                    Thanh toán đa dạng
                                  </span>
                                  <span className="des">
                                    Thanh toán khi nhận hàng, Napas, Visa,
                                    Chuyển Khoản
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-12">
                        <div
                          className="product-tab e-tabs not-dqtab"
                          id="tab-product"
                        >
                          <ul className="tabs tabs-title clearfix">
                            <li className="tab-link active" data-tab="#tab-1">
                              <h3 onClick={() => handleOpen()}>
                                Mô tả sản phẩm
                              </h3>
                            </li>

                            <li className="tab-link" data-tab="#tab-2">
                              <h3 onClick={() => handleOpen()}>
                                Hướng dẫn mua hàng
                              </h3>
                            </li>
                          </ul>
                          <div className="tab-float">
                            <div
                              id="tab-1"
                              className={`tab-content content_extab  ${
                                !open && "active"
                              }`}
                            >
                              <div className="rte product_getcontent">
                                <div
                                  className="ba-text-fpt d-flex "
                                  style={{
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                  }}
                                >
                                  <p>{data?.des}</p>
                                  {/* <p>Hạn sử dụng: 4 ngày kể từ ngày sản xuất</p> */}
                                  {/* <p>Bảo quản: 2-5 độ</p> */}
                                </div>
                              </div>
                            </div>

                            <div
                              id="tab-2"
                              className={`tab-content content_extab ${open && "active"}`}
                            >
                              <div
                                className="rte d-flex"
                                style={{
                                  flexDirection: "column",
                                  alignItems: "flex-start",
                                }}
                              >
                                <p>
                                  <strong>Bước 1:</strong>&nbsp;Truy cập website
                                  và lựa chọn sản phẩm&nbsp;cần mua
                                </p>
                                <p>
                                  <strong>Bước 2:</strong>&nbsp;Click và sản
                                  phẩm muốn mua, màn hình hiển thị ra pop up với
                                  các lựa chọn sau
                                </p>
                                <p>
                                  Nếu bạn muốn tiếp tục mua hàng: Bấm vào phần
                                  tiếp tục mua hàng để lựa chọn thêm sản phẩm
                                  vào giỏ hàng
                                </p>
                                <p>
                                  Nếu bạn muốn xem giỏ hàng để cập nhật sản
                                  phẩm: Bấm vào xem giỏ hàng
                                </p>
                                <p>
                                  Nếu bạn muốn đặt hàng và thanh toán cho sản
                                  phẩm này vui lòng bấm vào: Đặt hàng và thanh
                                  toán
                                </p>
                                <p>
                                  <strong>Bước 3:</strong>&nbsp;Lựa chọn thông
                                  tin tài khoản thanh toán
                                </p>
                                <p>
                                  Nếu bạn đã có tài khoản vui lòng nhập thông
                                  tin tên đăng nhập là email và mật khẩu vào mục
                                  đã có tài khoản trên hệ thống
                                </p>
                                <p>
                                  Nếu bạn chưa có tài khoản và muốn đăng ký tài
                                  khoản vui lòng điền các thông tin cá nhân để
                                  tiếp tục đăng ký tài khoản. Khi có tài khoản
                                  bạn sẽ dễ dàng theo dõi được đơn hàng của mình
                                </p>
                                <p>
                                  Nếu bạn muốn mua hàng mà không cần tài khoản
                                  vui lòng nhấp chuột vào mục đặt hàng không cần
                                  tài khoản
                                </p>
                                <p>
                                  <strong>Bước 4:</strong>&nbsp;Điền các thông
                                  tin của bạn để nhận đơn hàng, lựa chọn hình
                                  thức thanh toán và vận chuyển cho đơn hàng của
                                  mình
                                </p>
                                <p>
                                  <strong>Bước 5:</strong>&nbsp;Xem lại thông
                                  tin đặt hàng, điền chú thích và gửi đơn hàng
                                </p>
                                <p>
                                  Sau khi nhận được đơn hàng bạn gửi chúng tôi
                                  sẽ liên hệ bằng cách gọi điện lại để xác nhận
                                  lại đơn hàng và địa chỉ của bạn.
                                </p>
                                <p>Trân trọng cảm ơn.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
        </div>
        <FooterList />
      </div>
    </>
  );
};

export default ProductDetail;
