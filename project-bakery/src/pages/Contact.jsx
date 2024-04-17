import React from "react";
import Slider from "../Components/Slider";
import FooterList from "../Components/FooterList";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div>
        <Slider title={"Liên hệ"} />
      </div>

      <div className="content">
      <div className="title-home">
          <NavLink to={"/"} title="Trang chủ">
            Trang chủ
          </NavLink>
          <span>{">"}</span>
          <label>Liên hệ</label>
        </div>
        <div className="layout-contact">
          <div className="container-contact">
            <div className="outlay">
              <div className="contact-information">
                <div className="infor-contact">
                  <div className="contact">
                    <h4>Cửa hàng Dola Bakery</h4>
                    <div className="info-contact">
                      <div className="group-address">
                        <ul className="ul-contact">
                          <li className="li-contact">
                            <div className="icon-contact">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                                width="25"
                                height="25"
                                className="svg-contact"
                              >
                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
                              </svg>
                            </div>
                            <div className="info">
                              <b>Địa chỉ</b>
                              <span>70 Lữ Gia, Phường 15, Quận 11, TP.HCM</span>
                            </div>
                          </li>
                          <li className="li-contact">
                            <div className="icon-contact">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                width="25"
                                height="25"
                                className="svg-contact"
                              >
                                <path d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                              </svg>
                            </div>
                            <div className="info">
                              <b>Thời gian làm việc</b>
                              <span>
                                8h - 22h
                                <br />
                                Từ thứ 2 đến chủ nhật
                              </span>
                            </div>
                          </li>
                          <li className="li-contact">
                            <div className="icon-contact">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                width="25"
                                height="25"
                                className="svg-contact"
                              >
                                <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" />
                              </svg>
                            </div>
                            <div className="info">
                              <b>Hotline</b>
                              <a title="1900 6750" href="tel:19006750">
                                1900 6750
                              </a>
                            </div>
                          </li>
                          <li className="li-contact">
                            <div className="icon-contact">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                width="25"
                                height="25"
                                className="svg-contact"
                              >
                                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                              </svg>
                            </div>
                            <div className="info">
                              <b>Email</b>
                              <a
                                title="support@sapo.vn"
                                href="mailto:khoatune1306@gmail.com"
                              >
                                support@sapo.vn
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="form-contact">
                    <h4>Liên hệ với chúng tôi</h4>
                    <span className="content-form">
                      Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi,
                      và chúng tôi sẽ liên lạc lại với bạn sớm nhất có thể .
                    </span>
                    <div id="pagelogin">
                      <form
                        method="post"
                        action="/postcontact"
                        id="contact"
                        acceptCharset="UTF-8"
                      >
                        <input
                          name="FormType"
                          type="hidden"
                          defaultValue="contact"
                        />
                        <input name="utf8" type="hidden" defaultValue="true" />
                        <input
                          type="hidden"
                          id="Token-f21ae4911c964a50a686f0cd45552526"
                          name="Token"
                          defaultValue="03AFcWeA5KWuOKMlNmg0lg4vuib22yIIq5jY0LeC_rSD0wdNUvSO5InWjcpY-N1tMWgZWyeHQMLv1T9IlHkc5wpHm8GqSQ-pKi1zuqaMQxteL-s74sTm9Q4HloBNgb_njIPA1rgrsYFiPhkgiRQiohWvj-gcpQN8ALmuIShu8iThDabHUsdwN2AKbrygqzYbJ2LMUozqUsf5Y0kVl0k-ylXVYkeUEDr9bleRcVljJUtNPFNGTBv-Nac9iFSTsWRro4S36Xg3wfCAXXUvZL7bN9YhPp80TppaTt_ECkR-dBfmNzQyas5S62qPApclW1IHIJTPKMNRNRi1ZFGLtEEvEXi8Qmy4mASvdGxDgtneVpOOZfbun4PPI9M2zm0-BUbOYulaE1ab7PyskQcYNFuW7cPb_TJBW9H9nPsniDUEZQ18o_nnbi3wJP51TbBudOwT911VfL1yIHWZtRjxYmQTHXV3OavIkIOe-P7dDagA5vaeCk22RsVO0cSjXrrWGuTD-pps0DVjI1J9ET_ce0yq-gSZ2mi1c9nl4QMuJMw5HQDAvtEzR33YMdyhQ"
                        />
                        <div className="group_contact">
                          <input
                            placeholder="Họ và tên"
                            type="text"
                            className="form-control  form-control-lg"
                            required=""
                            defaultValue=""
                            name="contact[Name]"
                          />
                          <input
                            placeholder="Email"
                            type="email"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            required=""
                            id="email1"
                            className="form-control form-control-lg"
                            defaultValue=""
                            name="contact[email]"
                          />
                          <input
                            type="number"
                            placeholder="Điện thoại*"
                            name="contact[phone]"
                            className="form-control form-control-lg"
                            required=""
                          />
                          <textarea
                            placeholder="Nội dung"
                            name="contact[body]"
                            id="comment"
                            className="form-control content-area form-control-lg"
                            rows={5}
                            required=""
                            defaultValue={""}
                          />
                          <button type="button" className="btn-lienhe">
                            Gửi thông tin
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="map">
                  <div id="contact_map" className="map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.904611732553!2d105.81388241542348!3d21.03650239288885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab1946cc7e23%3A0x87ab3917166a0cd5!2zQ8O0bmcgdHkgY-G7lSBwaOG6p24gY8O0bmcgbmdo4buHIFNBUE8!5e0!3m2!1svi!2s!4v1555900531747!5m2!1svi!2s"
                      style={{ border: 0 }}
                      allowFullScreen=""
                    />
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

export default Contact;
