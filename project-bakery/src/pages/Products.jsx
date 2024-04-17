import React, { useEffect, useState } from "react";
import axios from "axios";

import Slider from "../Components/Slider";
import FooterList from "../Components/FooterList";

import "../Components/Products/style.css";
import { NavLink } from "react-router-dom";

import {
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
const Products = () => {
  const [products, setProducts] = useState({
    data: null,
    isLoading: false,
  });

  useEffect(() => {
    (async () => {
      setProducts((prev) => ({ ...prev, isLoading: true }));
      const { data: _data } = await axios.get("http://localhost:3000/products");
      setProducts(() => ({ data: _data, isLoading: false }));
    })();
  }, []);

  const { data} = products;

  console.log(data);
  return (
    <>
      <div
        className="product-list"
        style={{ maxWidth: "1300px", margin: "0 auto" }}
      >
        <Slider title={"Tất cả sản phẩm"} />
        <div className="content">
        <div className="title-home">
          <NavLink to={"/"} title="Trang chủ">
            Trang chủ
          </NavLink>
          <span>{">"}</span>
          <label>Tất cả sản phẩm</label>
        </div>
        <div className="container">
          <div className="row product-flex">
            <aside className="dqdt-sidebar sidebar col-lg-3 col-12">
              <div className="aside-content aside-content-menu">
                <div className="title-head-col">Danh mục sản phẩm</div>
                <nav className="nav-category">
                  <ul className="nav navbar-pills">
                    <li className="nav-item  relative">
                      <a
                        title="Bánh sinh nhật"
                        className="nav-link"
                        href="/banh-sinh-nhat"
                      >
                        Bánh sinh nhật
                      </a>
                    </li>
                    <li className="nav-item  relative">
                      <a
                        title="Bánh sự kiện"
                        className="nav-link"
                        href="/banh-su-kien"
                      >
                        Bánh sự kiện
                      </a>
                    </li>
                    <li className="nav-item  relative">
                      <a
                        title="Bánh cho trẻ em"
                        className="nav-link"
                        href="/banh-cho-tre-em"
                      >
                        Bánh cho trẻ em
                      </a>
                    </li>
                    <li className="nav-item  relative">
                      <a
                        title="Bánh kem đặt trước"
                        className="nav-link"
                        href="/banh-kem-dat-truoc"
                      >
                        Bánh kem đặt trước
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="filter-content">
                <div className="title-head-col">
                  Bộ lọc sản phẩm
                  <span>Giúp bạn tìm sản phẩm nhanh hơn</span>
                </div>
                <div className="filter-container">
                  <div className="col_title">
                    <div
                      className="filter-container__selected-filter"
                      style={{ display: "none" }}
                    >
                      <div className="filter-container__selected-filter-header clearfix">
                        <span className="filter-container__selected-filter-header-title">
                          Bạn chọn
                        </span>
                      </div>
                      <div className="filter-container__selected-filter-list">
                        <a
                          href="javascript:void(0)"
                          onClick="clearAllFiltered()"
                          className="filter-container__clear-all"
                        >
                          Bỏ hết{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            width={10}
                            height={10}
                            x={0}
                            y={0}
                            viewBox="0 0 365.696 365.696"
                            style={{ enableBackground: "new 0 0 512 512" }}
                            xmlSpace="preserve"
                            className=""
                          >
                            <g>
                              <path
                                xmlns="http://www.w3.org/2000/svg"
                                d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"
                                fill="#ffffff"
                                data-original="#fff"
                                style={{}}
                                className=""
                              />
                            </g>
                          </svg>
                        </a>
                        <ul />
                      </div>
                    </div>
                  </div>
                  {/* Lọc giá */}
                  <aside className="aside-item filter-price">
                    <div className="title-head">Chọn mức giá</div>
                    <div className="aside-content filter-group content_price">
                      <ul>
                        <li className="filter-item filter-item--check-box filter-item--green">
                          <span>
                            <label
                              data-filter="10-000d"
                              htmlFor="filter-duoi-10-000d"
                            >
                              <input
                                type="checkbox"
                                id="filter-duoi-10-000d"
                                data-group="Khoảng giá"
                                data-field="price_min"
                                data-text="Dưới 10.000đ"
                                defaultValue="(<10000)"
                                data-operator="OR"
                              />
                              <i className="fa" />
                              Dưới 10.000đ
                            </label>
                          </span>
                        </li>
                        <li className="filter-item filter-item--check-box filter-item--green">
                          <span>
                            <label
                              data-filter="50-000d"
                              htmlFor="filter-10-000d-50-000d"
                            >
                              <input
                                type="checkbox"
                                id="filter-10-000d-50-000d"
                                data-group="Khoảng giá"
                                data-field="price_min"
                                data-text="10.000đ - 50.000đ"
                                defaultValue="(>=10000 AND <=50000)"
                                data-operator="OR"
                              />
                              <i className="fa" />
                              Từ 10.000đ - 50.000đ
                            </label>
                          </span>
                        </li>
                        <li className="filter-item filter-item--check-box filter-item--green">
                          <span>
                            <label
                              data-filter="100-000d"
                              htmlFor="filter-50-000d-100-000d"
                            >
                              <input
                                type="checkbox"
                                id="filter-50-000d-100-000d"
                                data-group="Khoảng giá"
                                data-field="price_min"
                                data-text="50.000đ - 100.000đ"
                                defaultValue="(>=50000 AND <=100000)"
                                data-operator="OR"
                              />
                              <i className="fa" />
                              Từ 50.000đ - 100.000đ
                            </label>
                          </span>
                        </li>
                        <li className="filter-item filter-item--check-box filter-item--green">
                          <span>
                            <label
                              data-filter="200-000d"
                              htmlFor="filter-100-000d-200-000d"
                            >
                              <input
                                type="checkbox"
                                id="filter-100-000d-200-000d"
                                data-group="Khoảng giá"
                                data-field="price_min"
                                data-text="100.000đ - 200.000đ"
                                defaultValue="(>=100000 AND <=200000)"
                                data-operator="OR"
                              />
                              <i className="fa" />
                              Từ 100.000đ - 200.000đ
                            </label>
                          </span>
                        </li>
                        <li className="filter-item filter-item--check-box filter-item--green">
                          <span>
                            <label
                              data-filter="300-000d"
                              htmlFor="filter-200-000d-300-000d"
                            >
                              <input
                                type="checkbox"
                                id="filter-200-000d-300-000d"
                                data-group="Khoảng giá"
                                data-field="price_min"
                                data-text="200.000đ - 300.000đ"
                                defaultValue="(>=200000 AND <=300000)"
                                data-operator="OR"
                              />
                              <i className="fa" />
                              Từ 200.000đ - 300.000đ
                            </label>
                          </span>
                        </li>
                        <li className="filter-item filter-item--check-box filter-item--green">
                          <span>
                            <label
                              data-filter="500-000d"
                              htmlFor="filter-300-000d-500-000d"
                            >
                              <input
                                type="checkbox"
                                id="filter-300-000d-500-000d"
                                data-group="Khoảng giá"
                                data-field="price_min"
                                data-text="300.000đ - 500.000đ"
                                defaultValue="(>=300000 AND <=500000)"
                                data-operator="OR"
                              />
                              <i className="fa" />
                              Từ 300.000đ - 500.000đ
                            </label>
                          </span>
                        </li>
                        <li className="filter-item filter-item--check-box filter-item--green">
                          <span>
                            <label
                              data-filter="1-000-000d"
                              htmlFor="filter-500-000d-1-000-000d"
                            >
                              <input
                                type="checkbox"
                                id="filter-500-000d-1-000-000d"
                                data-group="Khoảng giá"
                                data-field="price_min"
                                data-text="500.000đ - 1.000.000đ"
                                defaultValue="(>=500000 AND <=1000000)"
                                data-operator="OR"
                              />
                              <i className="fa" />
                              Từ 500.000đ - 1 triệu
                            </label>
                          </span>
                        </li>
                        <li className="filter-item filter-item--check-box filter-item--green">
                          <span>
                            <label
                              data-filter="1-000-000d"
                              htmlFor="filter-tren1-000-000d"
                            >
                              <input
                                type="checkbox"
                                id="filter-tren1-000-000d"
                                data-group="Khoảng giá"
                                data-field="price_min"
                                data-text="Trên 1.000.000đ"
                                defaultValue="(>1000000)"
                                data-operator="OR"
                              />
                              <i className="fa" />
                              Trên 1 triệu
                            </label>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </aside>

                  <aside className="aside-item filter-tag">
                    <div className="title-head">Trọng lượng</div>
                    <div className="aside-content filter-group">
                      <ul>
                        <li className="filter-item filter-item--check-box filter-item--green">
                          <span>
                            <label htmlFor="filter-90g">
                              <input
                                type="checkbox"
                                id="filter-90g"
                                data-group="tag2"
                                data-field="tags"
                                data-text="90g"
                                defaultValue="(90g)"
                                data-operator="OR"
                              />
                              <i className="fa" />
                              90g
                            </label>
                          </span>
                        </li>
                        <li className="filter-item filter-item--check-box filter-item--green">
                          <span>
                            <label htmlFor="filter-100g">
                              <input
                                type="checkbox"
                                id="filter-100g"
                                data-group="tag2"
                                data-field="tags"
                                data-text="100g"
                                defaultValue="(100g)"
                                data-operator="OR"
                              />
                              <i className="fa" />
                              100g
                            </label>
                          </span>
                        </li>
                        <li className="filter-item filter-item--check-box filter-item--green">
                          <span>
                            <label htmlFor="filter-107g">
                              <input
                                type="checkbox"
                                id="filter-107g"
                                data-group="tag2"
                                data-field="tags"
                                data-text="107g"
                                defaultValue="(107g)"
                                data-operator="OR"
                              />
                              <i className="fa" />
                              107g
                            </label>
                          </span>
                        </li>
                        <li className="filter-item filter-item--check-box filter-item--green">
                          <span>
                            <label htmlFor="filter-120g">
                              <input
                                type="checkbox"
                                id="filter-120g"
                                data-group="tag2"
                                data-field="tags"
                                data-text="120g"
                                defaultValue="(120g)"
                                data-operator="OR"
                              />
                              <i className="fa" />
                              120g
                            </label>
                          </span>
                        </li>
                        <li className="filter-item filter-item--check-box filter-item--green">
                          <span>
                            <label htmlFor="filter-200g">
                              <input
                                type="checkbox"
                                id="filter-200g"
                                data-group="tag2"
                                data-field="tags"
                                data-text="200g"
                                defaultValue="(200g)"
                                data-operator="OR"
                              />
                              <i className="fa" />
                              200g
                            </label>
                          </span>
                        </li>
                        <li className="filter-item filter-item--check-box filter-item--green">
                          <span>
                            <label htmlFor="filter-220g">
                              <input
                                type="checkbox"
                                id="filter-220g"
                                data-group="tag2"
                                data-field="tags"
                                data-text="220g"
                                defaultValue="(220g)"
                                data-operator="OR"
                              />
                              <i className="fa" />
                              220g
                            </label>
                          </span>
                        </li>
                        <li className="filter-item filter-item--check-box filter-item--green">
                          <span>
                            <label htmlFor="filter-250g">
                              <input
                                type="checkbox"
                                id="filter-250g"
                                data-group="tag2"
                                data-field="tags"
                                data-text="250g"
                                defaultValue="(250g)"
                                data-operator="OR"
                              />
                              <i className="fa" />
                              250g
                            </label>
                          </span>
                        </li>
                        <li className="filter-item filter-item--check-box filter-item--green">
                          <span>
                            <label htmlFor="filter-400g">
                              <input
                                type="checkbox"
                                id="filter-400g"
                                data-group="tag2"
                                data-field="tags"
                                data-text="400g"
                                defaultValue="(400g)"
                                data-operator="OR"
                              />
                              <i className="fa" />
                              400g
                            </label>
                          </span>
                        </li>
                        <li className="filter-item filter-item--check-box filter-item--green">
                          <span>
                            <label htmlFor="filter-500g">
                              <input
                                type="checkbox"
                                id="filter-500g"
                                data-group="tag2"
                                data-field="tags"
                                data-text="500g"
                                defaultValue="(500g)"
                                data-operator="OR"
                              />
                              <i className="fa" />
                              500g
                            </label>
                          </span>
                        </li>
                        <li className="filter-item filter-item--check-box filter-item--green">
                          <span>
                            <label htmlFor="filter-700g">
                              <input
                                type="checkbox"
                                id="filter-700g"
                                data-group="tag2"
                                data-field="tags"
                                data-text="700g"
                                defaultValue="(700g)"
                                data-operator="OR"
                              />
                              <i className="fa" />
                              700g
                            </label>
                          </span>
                        </li>
                        <li className="filter-item filter-item--check-box filter-item--green">
                          <span>
                            <label htmlFor="filter-900g">
                              <input
                                type="checkbox"
                                id="filter-900g"
                                data-group="tag2"
                                data-field="tags"
                                data-text="900g"
                                defaultValue="(900g)"
                                data-operator="OR"
                              />
                              <i className="fa" />
                              900g
                            </label>
                          </span>
                        </li>
                        <li className="filter-item filter-item--check-box filter-item--green">
                          <span>
                            <label htmlFor="filter-1-4kg">
                              <input
                                type="checkbox"
                                id="filter-1-4kg"
                                data-group="tag2"
                                data-field="tags"
                                data-text="1.4kg"
                                defaultValue="(1.4kg)"
                                data-operator="OR"
                              />
                              <i className="fa" />
                              1.4kg
                            </label>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </aside>
                  {/* End lọc theo chất liệu */}
                  {/* Lọc kích thước màn hình */}
                  {/* End lọc theo kích thước màn hình */}
                  <div className="border_filter"></div>
                  {/* Lọc tính năng camera */}
                  {/* End lọc theo tính nắng camera */}
                  {/* Lọc theo tính năng đặc biệt */}
                  {/* End lọc theo tính năng đặc biệt */}
                </div>
              </div>{" "}
            </aside>
            <div className="block-collection col-lg-9 col-12">
              <div className="category-products">
                <div className="sort-cate clearfix margin-bottom-10 hidden-xs">
                  <div className="sort-cate-left hidden-xs">
                    <h3>
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        width="12px"
                        height="12px"
                        viewBox="0 0 97.761 97.762"
                        style={{ enableBackground: "new 0 0 97.761 97.762" }}
                        xmlSpace="preserve"
                      >
                        <path
                          d="M42.761,65.596H34.75V2c0-1.105-0.896-2-2-2H16.62c-1.104,0-2,0.895-2,2v63.596H6.609c-0.77,0-1.472,0.443-1.804,1.137
					 c-0.333,0.695-0.237,1.519,0.246,2.117l18.076,26.955c0.38,0.473,0.953,0.746,1.558,0.746s1.178-0.273,1.558-0.746L44.319,68.85
					 c0.482-0.6,0.578-1.422,0.246-2.117C44.233,66.039,43.531,65.596,42.761,65.596z"
                        />
                        <path
                          d="M93.04,95.098L79.71,57.324c-0.282-0.799-1.038-1.334-1.887-1.334h-3.86c-0.107,0-0.213,0.008-0.318,0.024
					 c-0.104-0.018-0.21-0.024-0.318-0.024h-3.76c-0.849,0-1.604,0.535-1.887,1.336L54.403,95.1c-0.215,0.611-0.12,1.289,0.255,1.818
					 s0.983,0.844,1.633,0.844h5.773c0.88,0,1.657-0.574,1.913-1.416l2.536-8.324h14.419l2.536,8.324
					 c0.256,0.842,1.033,1.416,1.913,1.416h5.771c0.649,0,1.258-0.314,1.633-0.844C93.16,96.387,93.255,95.709,93.04,95.098z
					 M68.905,80.066c2.398-7.77,4.021-13.166,4.82-16.041l4.928,16.041H68.905z"
                        />
                        <path
                          d="M87.297,34.053H69.479L88.407,6.848c0.233-0.336,0.358-0.734,0.358-1.143V2.289c0-1.104-0.896-2-2-2H60.694
					 c-1.104,0-2,0.896-2,2v3.844c0,1.105,0.896,2,2,2h16.782L58.522,35.309c-0.233,0.336-0.358,0.734-0.358,1.146v3.441
					 c0,1.105,0.896,2,2,2h27.135c1.104,0,2-0.895,2-2v-3.842C89.297,34.947,88.402,34.053,87.297,34.053z"
                        />
                      </svg>
                      Xếp theo:
                    </h3>
                    <ul>
                      <li className="btn-quick-sort alpha-asc">
                        <a
                          href="javascript:;"
                          onClick="sortby('alpha-asc')"
                          title="Tên A-Z"
                        >
                          <i />
                          Tên A-Z
                        </a>
                      </li>
                      <li className="btn-quick-sort alpha-desc">
                        <a
                          href="javascript:;"
                          onClick="sortby('alpha-desc')"
                          title="Tên Z-A"
                        >
                          <i />
                          Tên Z-A
                        </a>
                      </li>
                      <li className="btn-quick-sort position-desc">
                        <a
                          href="javascript:;"
                          onClick="sortby('created-desc')"
                          title="Hàng mới"
                        >
                          <i />
                          Hàng mới
                        </a>
                      </li>
                      <li className="btn-quick-sort price-asc">
                        <a
                          href="javascript:;"
                          onClick="sortby('price-asc')"
                          title="Giá thấp đến cao"
                        >
                          <i />
                          Giá thấp đến cao
                        </a>
                      </li>
                      <li className="btn-quick-sort price-desc">
                        <a
                          href="javascript:;"
                          onClick="sortby('price-desc')"
                          title="Giá cao xuống thấp"
                        >
                          <i />
                          Giá cao xuống thấp
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  style={{ display: "flex", width: "100%", flexWrap: "wrap" }}
                >
                  {data?.map((item) => {
                    return (
                      <div
                        style={{
                          width: "22%",
                          maxWidth: "250px",
                          margin: "32px 32px",
                        }}
                        className="product-box"
                        key={item.id}
                      >
                        <div className="product-img">
                          <div className="lable-flex">
                            <div
                              className={`discount ${
                                item.discount != 0 ? "" : "d-none"
                              }`}
                            >
                              <label>{`${item.discount}%`}</label>
                            </div>
                            <br></br>
                            <div
                              className={`new ${
                                item.product_new ? "" : "d-none"
                              }`}
                            >
                              <label>New</label>
                            </div>
                            <button className="icons-heart">
                              <div
                                className={`${
                                  item.product_like ? "d-none" : ""
                                }`}
                              >
                                <AiOutlineHeart />
                              </div>
                              <div
                                className={`${
                                  item.product_like ? "" : "d-none"
                                }`}
                              >
                                <AiFillHeart />
                              </div>
                            </button>
                          </div>
                          <a href={`/products/${item.id}`}>
                            <img src={item.images} />
                          </a>
                        </div>
                        <div
                          className="product-detail"
                          style={{ padding: "8px 16px" }}
                        >
                          <div className="product-name">
                            <h3>
                              <a href={`/products/${item.id}`}>{item.title}</a>
                            </h3>
                          </div>
                          <div className="price-box">
                            <div className="price-new">{`${parseInt(
                              (parseInt(item.price) *
                                (100 - parseInt(item.discount))) /
                                100
                            )}.000đ`}</div>
                            <div className="price-old">{`${item.price}.000đ`}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        
      </div>

      <FooterList />
    </>
  );
};

export default Products;
