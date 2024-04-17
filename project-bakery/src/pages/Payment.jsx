import React, { useState, useEffect } from "react";
import Slider from "../Components/Slider";
import FooterList from "../Components/FooterList";
import { NavLink } from "react-router-dom";
import { Button, DatePicker, Input, Checkbox, Dropdown } from "antd";
import axios from "axios";
const { TextArea } = Input;

const Payment = () => {
  const [editUser, setEditUser] = useState(null);

  const userSesstion = sessionStorage.getItem("userSesstion");

  useEffect(() => {
    if (userSesstion != null) {
      if (userSesstion.length > 0) {
        const userOrder = JSON.parse(userSesstion);
        setEditUser(userOrder);
      }
    }
  }, [userSesstion]);

  //Get cart from localStogary
  const [cart, setCart] = useState(() => {
    //Lay gio hang tu localStogory neu co hoac tra ve mang rong
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  let totalPriceNumber = 0;
  const totalPrice = () => {
    cart.map((item) => {
      let total = parseInt(
        parseInt(item.product_quantity) * parseInt(item.price)
      );
      totalPriceNumber = totalPriceNumber + total;
    });
  };
  //}, [cart]);
  totalPrice();
  const [productCart, setProductCart] = useState([]);
  //const savedProductCart = localStorage.getItem("cart");


  //if(savedProductCart != null){
    //setProductCart(JSON.parse(savedProductCart));
  //}



  let render = () => {
    if (cart != null) {
      return cart.map((item, index) => {
        return (
          <>
            <tr index={index} key={index}>
              <td className="infor-cart-order">
                <div className="img-cart-order">
                  <NavLink to={`/products/${item.id}`} title={item.title}>
                    <img src={item.images} />
                  </NavLink>
                </div>
                <div className="title-cart-order">
                  <NavLink
                    to={`/products/${item.id}`}
                    title={item.title}
                    className="cart-ititle"
                  >
                    {item.title}
                  </NavLink>
                </div>
              </td>
              <td className="item-color-order">{`${
                parseInt(item.product_quantity) * parseInt(item.price)
              }.000đ`}</td>
            </tr>
          </>
        );
      });
    }
  };
  const [idUser, setIdUser] = useState();

  let render_account_payment = () => {
    if (userSesstion != null) {
      const user = JSON.parse(userSesstion);
      useEffect(() => {
        setIdUser(user.id);
      }, [user.id]);
      return (
        <>
          <div>
            <Input
              className="input-username"
              placeholder="Họ"
              value={user.firts}
              onChange={(e) =>
                setEditUser({
                  ...editUser,
                  last_name: e.target.value,
                })
              }
              disabled
            />
            <Input
              className="input-username"
              placeholder="Tên"
              value={user.last_name}
              onChange={(e) =>
                setEditUser({
                  ...editUser,
                  last_name: e.target.value,
                })
              }
              disabled
            />
            <Input
              className="input-username"
              placeholder="Email"
              value={user.email}
              onChange={(e) =>
                setEditUser({
                  ...editUser,
                  email: e.target.value,
                })
              }
              disabled
            />
            <Input
              className="input-username"
              placeholder="Số điện thoại"
              value={user.phone}
              onChange={(e) =>
                setEditUser({
                  ...editUser,
                  phone: e.target.value,
                })
              }
              disabled
            />
            <Input
              className="input-username"
              placeholder="Mật Khẩu"
              value={user.password}
              onChange={(e) =>
                setEditUser({
                  ...editUser,
                  password: e.target.value,
                })
              }
              disabled
            />
            <TextArea
              className="input-username"
              rows={4}
              placeholder="Địa chỉ"
              maxLength={1000}
              value={user.adress}
              onChange={(e) =>
                setEditUser({
                  ...editUser,
                  adress: e.target.value,
                })
              }
              disabled
            />
          </div>
        </>
      );
    }
  };

  const addPayment = async () => {
    try {
      await axios.post("http://localhost:3000/carts", {
        id_carts:"",
        products: JSON.parse(localStorage.getItem("cart")),
        id_user: parseInt(idUser),
        carts_quantity: productCart.length,
        sum_price:`${parseInt(
          parseInt(totalPriceNumber) + 40
        )}`,
        payment_methods: "Thu hộ",
        id_voucher: "1",

        // Đặt giá trị mặc định cho các trường dữ liệu khác tại đây
      });

      window.location.href = "/paymentsucces";
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <>
      <div>
        <Slider title={"Thanh toán"} />
      </div>
      <div className="content">
        <div data-tg-refresh="checkout" id="checkout">
          <form
            id="checkoutForm"
            method="post"
            data-define="{
				loadingShippingErrorMessage: 'Không thể load phí vận chuyển. Vui lòng thử lại',
				loadingReductionCodeErrorMessage: 'Có lỗi xảy ra khi áp dụng khuyến mãi. Vui lòng thử lại',
				submitingCheckoutErrorMessage: 'Có lỗi xảy ra khi xử lý. Vui lòng thử lại',
				requireShipping: true,
				requireDistrict: false,
				requireWard: false,
				shouldSaveCheckoutAbandon: true}"
            action="/checkout/d0e92559e6d742cba2be1a1d64607a69"
            data-bind-event-submit="handleCheckoutSubmit(event)"
            data-bind-event-keypress="handleCheckoutKeyPress(event)"
            data-bind-event-change="handleCheckoutChange(event)"
          >
            <input type="hidden" name="_method" defaultValue="patch" />
            <div className="wrap">
              <main className="main">
                <header className="main__header">
                  <div className="logo logo--center">
                    <a href="/">
                      <img
                        className="logo__image  logo__image--medium "
                        alt="Dola Bakery"
                        src="//bizweb.dktcdn.net/100/492/035/themes/919334/assets/logo.png?1694745247263"
                      />
                    </a>
                  </div>
                </header>
                <div className="main__content">
                  <article className="animate-floating-labels row">
                    <div className="col col--two">
                      <section className="section">
                        <div className="section__header">
                          <div className="layout-flex">
                            <h2 className="section__title layout-flex__item layout-flex__item--stretch">
                              <i className="fa fa-id-card-o fa-lg section__title--icon hide-on-desktop" />
                              Thông tin nhận hàng
                            </h2>
                            <a href="/account/login?returnUrl=/checkout/d0e92559e6d742cba2be1a1d64607a69">
                              <i className="fa fa-user-circle-o fa-lg" />
                              <span>Đăng nhập </span>
                            </a>
                          </div>
                        </div>
                        <div className="section__content">
                          {render_account_payment()}
                        </div>
                        <div></div>
                      </section>
                      <div className="fieldset">
                        <h3 className="visually-hidden">Ghi chú</h3>
                        <div
                          className="field "
                          data-bind-class="{'field--show-floating-label': note}"
                        >
                          <div className="field__input-wrapper">
                            <label htmlFor="note" className="field__label">
                              Ghi chú (tùy chọn)
                            </label>
                            <textarea
                              name="note"
                              id="note"
                              className="field__input"
                              data-bind="note"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col col--two">
                      <section
                        className="section"
                        data-define="{shippingMethod: '765968_0,40.000 VND'}"
                      >
                        <div className="section__header">
                          <div className="layout-flex">
                            <h2 className="section__title layout-flex__item layout-flex__item--stretch">
                              <i className="fa fa-truck fa-lg section__title--icon hide-on-desktop" />
                              Vận chuyển
                            </h2>
                          </div>
                        </div>
                        <div
                          className="section__content"
                          data-tg-refresh="refreshShipping"
                          id="shippingMethodList"
                          data-define="{isAddressSelecting: false, shippingMethods: []}"
                        >
                          <div
                            className="alert alert--loader spinner spinner--active hide"
                            data-bind-show="isLoadingShippingMethod"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="spinner-loader"
                            >
                              <use href="#spinner" />
                            </svg>
                          </div>
                          <div
                            className="alert alert-retry alert--danger hide"
                            data-bind-event-click="handleShippingMethodErrorRetry()"
                            data-bind-show="!isLoadingShippingMethod && !isAddressSelecting && isLoadingShippingError"
                          >
                            <span data-bind="loadingShippingErrorMessage">
                              Không thể load phí vận chuyển. Vui lòng thử lại
                            </span>{" "}
                            <i className="fa fa-refresh" />
                          </div>
                          <div
                            className="content-box"
                            data-bind-show="!isLoadingShippingMethod && !isAddressSelecting && !isLoadingShippingError"
                          >
                            <div
                              className="content-box__row"
                              data-define-array="{shippingMethods: {name: '765968_0,40.000 VND', textPrice: '40.000₫', textDiscountPrice: '-', subtotalPriceWithShippingFee: '420.000₫'}}"
                            >
                              <div className="radio-wrapper">
                                <label
                                  htmlFor="shippingMethod-765968_0"
                                  className="radio__label"
                                >
                                  <span className="radio__label__primary">
                                    <Checkbox checked={true}>
                                      <span>Giao hàng tận nơi</span>
                                    </Checkbox>
                                  </span>
                                  <span className="radio__label__accessory">
                                    <span className="content-box__emphasis price">
                                      40.000₫
                                    </span>
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div
                            className="alert alert--info hide"
                            data-bind-show="!isLoadingShippingMethod && isAddressSelecting"
                          >
                            Vui lòng nhập thông tin giao hàng
                          </div>
                        </div>
                      </section>
                      <section className="section">
                        <div className="section__header">
                          <div className="layout-flex">
                            <h2 className="section__title layout-flex__item layout-flex__item--stretch">
                              <i className="fa fa-credit-card fa-lg section__title--icon hide-on-desktop" />
                              Thanh toán
                            </h2>
                          </div>
                        </div>
                        <div className="section__content">
                          <div
                            className="content-box"
                            data-define="{paymentMethod: undefined}"
                          >
                            <div className="content-box__row">
                              <div className="radio-wrapper">
                                <div className="radio__input"></div>
                                <label
                                  htmlFor="paymentMethod-633442"
                                  className="radio__label"
                                >
                                  <Checkbox>
                                    {" "}
                                    <span className="radio__label__primary">
                                      Thu hộ (COD)
                                    </span>
                                  </Checkbox>

                                  <span className="radio__label__accessory">
                                    <span className="radio__label__icon"></span>
                                  </span>
                                </label>
                              </div>
                            </div>
                            <div className="content-box__row">
                              <div className="radio-wrapper">
                                <div className="radio__input"></div>
                                <label
                                  htmlFor="paymentMethod-633440"
                                  className="radio__label"
                                >
                                  <Checkbox>
                                    <span className="radio__label__primary">
                                      Chuyển khoản
                                    </span>
                                  </Checkbox>

                                  <span className="radio__label__accessory">
                                    <span className="radio__label__icon"></span>
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </article>
                  <div className="field__input-btn-wrapper field__input-btn-wrapper--vertical hide-on-desktop">
                    <Button
                      type="submit"
                      className="btn btn-checkout spinner"
                      data-bind-class="{'spinner--active': isSubmitingCheckout}"
                      data-bind-disabled="isSubmitingCheckout || isLoadingReductionCode"
                    >
                      <span className="spinner-label">ĐẶT HÀNG</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="spinner-loader"
                        onClick={addPayment}
                      >
                        <use href="#spinner" />
                      </svg>
                    </Button>
                    <a href="/cart" className="previous-link">
                      <i className="previous-link__arrow">❮</i>
                      <span className="previous-link__content">
                        Quay về giỏ hàng
                      </span>
                    </a>
                  </div>
                  <div id="common-alert" data-tg-refresh="refreshError">
                    <div
                      className="alert alert--danger hide-on-desktop hide"
                      data-bind-show="!isSubmitingCheckout && isSubmitingCheckoutError"
                      data-bind="submitingCheckoutErrorMessage"
                    >
                      Có lỗi xảy ra khi xử lý. Vui lòng thử lại
                    </div>
                  </div>
                </div>
              </main>
              <aside className="sidebar">
                <div className="sidebar__header">
                  <h2 className="sidebar__title">Đơn hàng (1 sản phẩm)</h2>
                </div>
                <div className="sidebar__content">
                  <div
                    id="order-summary"
                    className="order-summary order-summary--is-collapsed"
                  >
                    <div className="order-summary__sections">
                      <div className="cart-order order-summary__section order-summary__section--product-list order-summary__section--is-scrollable order-summary--collapse-element">
                        <table className="table">
                          <thead></thead>
                          <tbody>
                            <td
                              key={cart.id}
                              className={`cart-none ${
                                cart.length != 0 ? "d-none" : ""
                              }`}
                            >
                              Không có sản phẩm nào trong giỏ hàng !
                            </td>

                            {render()}
                          </tbody>
                        </table>
                      </div>
                      <div
                        className="order-summary__section order-summary__section--discount-code"
                        data-tg-refresh="refreshDiscount"
                        id="discountCode"
                      >
                        <h3 className="visually-hidden">Mã khuyến mại</h3>
                        <div className="edit_checkout animate-floating-labels">
                          <div className="fieldset">
                            <div className="field ">
                              <div className="field__input-btn-wrapper">
                                <div className="field__input-wrapper">
                                  <label
                                    htmlFor="reductionCode"
                                    className="field__label"
                                  >
                                    Nhập mã giảm giá
                                  </label>
                                  <input
                                    name="reductionCode"
                                    id="reductionCode"
                                    type="text"
                                    className="field__input"
                                    autoComplete="off"
                                    data-bind-disabled="isLoadingReductionCode"
                                    data-bind-event-keypress="handleReductionCodeKeyPress(event)"
                                    data-define="{reductionCode: null}"
                                    data-bind="reductionCode"
                                  />
                                </div>
                                <button
                                  className="field__input-btn btn spinner btn--disabled"
                                  type="button"
                                  data-bind-disabled="isLoadingReductionCode || !reductionCode"
                                  data-bind-class="{'spinner--active': isLoadingReductionCode, 'btn--disabled': !reductionCode}"
                                  data-bind-event-click="applyReductionCode()"
                                  disabled=""
                                >
                                  <span className="spinner-label">Áp dụng</span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="spinner-loader"
                                  >
                                    <use href="#spinner" />
                                  </svg>
                                </button>
                              </div>
                              <p
                                className="field__message field__message--error field__message--error-always-show hide"
                                data-bind-show="!isLoadingReductionCode && isLoadingReductionCodeError"
                                data-bind="loadingReductionCodeErrorMessage"
                              >
                                Có lỗi xảy ra khi áp dụng khuyến mãi. Vui lòng
                                thử lại
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="order-summary__section order-summary__section--total-lines order-summary--collapse-element"
                        data-define="{subTotalPriceText: '380.000₫'}"
                        data-tg-refresh="refreshOrderTotalPrice"
                        id="orderSummary"
                      >
                        <table className="total-line-table">
                          <caption className="visually-hidden">
                            Tổng giá trị
                          </caption>
                          <thead>
                            <tr>
                              <td>
                                <span className="visually-hidden">Mô tả</span>
                              </td>
                              <td>
                                <span className="visually-hidden">
                                  Giá tiền
                                </span>
                              </td>
                            </tr>
                          </thead>
                          <tbody className="total-line-table__tbody">
                            <tr className="total-line total-line--subtotal">
                              <th className="total-line__name">Tạm tính</th>
                              <td className="total-line__price">{`${totalPriceNumber}.000₫`}</td>
                            </tr>
                            <tr className="total-line total-line--shipping-fee">
                              <th className="total-line__name">
                                Phí vận chuyển
                              </th>
                              <td
                                className="total-line__price"
                                data-bind="getTextShippingPrice()"
                              >
                                40.000₫
                              </td>
                            </tr>
                          </tbody>
                          <tfoot className="total-line-table__footer">
                            <tr className="total-line payment-due">
                              <th className="total-line__name">
                                <span className="payment-due__label-total">
                                  Tổng cộng
                                </span>
                              </th>
                              <td className="total-line__price">
                                <span
                                  className="payment-due__price"
                                  data-bind="getTextTotalPrice()"
                                >
                                  {`${parseInt(
                                    parseInt(totalPriceNumber) + 40
                                  )}.000₫`}
                                </span>
                              </td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                      <div className="order-summary__nav field__input-btn-wrapper hide-on-mobile layout-flex--row-reverse">
                        <Button
                          type="submit"
                          className="btn btn-checkout spinner"
                          data-bind-class="{'spinner--active': isSubmitingCheckout}"
                          data-bind-disabled="isSubmitingCheckout || isLoadingReductionCode"
                          onClick={addPayment}
                        >
                          <span className="spinner-label">ĐẶT HÀNG</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="spinner-loader"
                          >
                            <use href="#spinner" />
                          </svg>
                        </Button>
                        <a href="/cart" className="previous-link">
                          <i className="previous-link__arrow">❮</i>
                          <span className="previous-link__content">
                            Quay về giỏ hàng
                          </span>
                        </a>
                      </div>
                      <div
                        id="common-alert-sidebar"
                        data-tg-refresh="refreshError"
                      >
                        <div
                          className="alert alert--danger hide-on-mobile hide"
                          data-bind-show="!isSubmitingCheckout && isSubmitingCheckoutError"
                          data-bind="submitingCheckoutErrorMessage"
                        >
                          Có lỗi xảy ra khi xử lý. Vui lòng thử lại
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </form>
          <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
            <symbol id="spinner">
              <svg viewBox="0 0 30 30">
                <circle
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="85%"
                  cx="50%"
                  cy="50%"
                  r="40%"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 15 15"
                    to="360 15 15"
                    dur="0.7s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </symbol>
          </svg>
        </div>
      </div>
      <FooterList />
    </>
  );
};

export default Payment;
