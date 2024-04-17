import React, { useState, useEffect } from "react";
import Slider from "../Components/Slider";
import FooterList from "../Components/FooterList";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input } from "antd";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const [user, setUser] = useState({
    data: null,
    isLoading: false,
  });

  useEffect(() => {
    (async () => {
      setUser((prev) => ({ ...prev, isLoading: true }));
      const { data: _data } = await axios.get("http://localhost:3000/user");
      setUser({ data: _data, isLoading: false });
    })();
  }, []);

  const handleLogin = () => {
    if (user.data != null) {
      return user.data.map((item, index) => {
        if (item.email === email && item.password === password) {
          setLoggedIn(true);
          sessionStorage.setItem("userSesstion", JSON.stringify(item));
          window.location.href = "/";
        } else {
          setLoggedIn(false);
          setErrorEmail(true);
          setErrorPassword(true);
        }
      });
    }
  };
  return (
    <>
      <div>
        <Slider title={"Đăng Nhập"} />
      </div>
      <div className="content form-user">
        <div className="container">
          <div>
            <h1 style={{fontWeight: "700"}}>ĐĂNG NHẬP</h1>
            <Input
              className={`input-username ${errorEmail ? "error" : ""}`}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input.Password
              className={`input-pass ${errorPassword ? "error" : ""}`}
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
            <Button
              className="btn-login"
              type="primary"
              onClick={() => handleLogin()}
            >
              <span style={{fontSize:"17px"}}>Đăng nhập</span>
            </Button>
            <NavLink
              type="primary"
              to={"/register"}
            >
              <span style={{fontSize:"17px", float: "right", marginTop: "10px"}}>Đăng ký</span>
            </NavLink>
          </div>
          
        </div>
      </div>
      <FooterList />
    </>
  );
};

export default Login;
