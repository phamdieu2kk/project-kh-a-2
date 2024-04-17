import React, { useState , useEffect } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input } from "antd";
import axios from "axios";

const Admin = () => {
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
        if (
          item.email === email &&
          item.password === password &&
          item.role === "admin"
        ) {
          setLoggedIn(true);
          sessionStorage.setItem("userSesstion", JSON.stringify(item));
          window.location.href = "/dashboard";
        } else {
          setLoggedIn(false);
          setErrorEmail(true);
          setErrorPassword(true);
        }
      });
    }
  };
  return (
    <div className="container">
      <div>
      <h1>Login Admin</h1>
      <Input
        className={`input-username ${errorEmail ? "error" : ""}`}
        placeholder="Input Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input.Password
        className={`input-pass ${errorPassword ? "error" : ""}`}
        placeholder="Input password"
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
        Login
      </Button>
    </div>
    </div>
  );
};

export default Admin;
