import React,{useState, useEffect} from "react";
import Slider from "../Components/Slider";
import FooterList from "../Components/FooterList";

import { Button, DatePicker, Input, Checkbox, Dropdown } from "antd";
import axios from "axios";
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const Register = () => {
  const [user, setUser] = useState({
    firts: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    adress: "",
    role: "Khách hàng"

    // Thêm các trường dữ liệu khác tại đây
  });

  const addUser = async () => {
    try {
      await axios.post("http://localhost:3000/user", user);
      setUser({
        firts: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
        adress: "",
        role: "Khách hàng"

        // Đặt giá trị mặc định cho các trường dữ liệu khác tại đây
      });

      window.location.href = "/login";
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <>
      <div>
        <Slider title={"Đăng Ký"} />
      </div>
      <div className="content form-user">
        <div className="container">
          <div>
            <h1 style={{ fontWeight: "700" }}>ĐĂNG KÝ</h1>
            <Input
              className="input-username"
              placeholder="Họ"
              value={user.firts}
              onChange={(e) => setUser({...user,firts: e.target.value})}
            />
             <Input
              className="input-username"
              placeholder="Tên"
              value={user.last_name}
              onChange={(e) => setUser({...user,last_name: e.target.value})}
            />
            <Input
              className="input-username"
              placeholder="Email"
              value={user.email}
              onChange={(e) => setUser({...user,email: e.target.value})}
            />
            <Input
              className="input-username"
              placeholder="Số điện thoại"
              value={user.phone}
              onChange={(e) => setUser({...user,phone: e.target.value})}
            />
            <Input
              className="input-username"
              placeholder="Mật Khẩu"
              value={user.password}
              onChange={(e) => setUser({...user,password: e.target.value})}
            />
            <TextArea 
                  className="input-username"
                  rows={4} 
                  placeholder="Địa chỉ" 
                  maxLength={1000} 
                  value={user.adress}
              onChange={(e) => setUser({...user,adress: e.target.value})}
            />
            <Button className="btn-login" type="primary" onClick={addUser}>
              <span style={{ fontSize: "17px" }}>Đăng ký</span>
            </Button>
          </div>
        </div>
      </div>
      <FooterList />
    </>
  );
};

export default Register;
