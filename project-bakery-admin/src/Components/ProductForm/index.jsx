
import { Col, Row } from "antd";
import { NavLink } from "react-router-dom";

import {
  Button,
  DatePicker,
  Input,
  Checkbox 
} from "antd";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const ProductForm = () => {
    return (
        <div>
          <Row>
            <Col span={18} push={6}>
              <div className="item-add">
                <NavLink to={"/product"}>Quản lý sản phẩm</NavLink> {" >  "}{" "}
                <label>Thêm sản phẩm </label>
              </div>
              <h3>Thêm Sản phẩm</h3>
              <div className="form-product">
                <label>Tên sản phẩm:</label>
                <Input placeholder="Nhập tên sản phẩm" />
                <br></br>
                <br></br>
                <label>Mô tả:</label>
                <TextArea rows={4} placeholder="Mô tả sản phẩm" maxLength={6} />
                <br></br>
                <br></br>
                <label>Link hình ảnh:</label>
                <Input placeholder="Nhập link hình ảnh" />
                <br></br>
                <br></br>
                <label>Giá:</label>
                <Input type="number" placeholder="Nhập giá sản phẩm" />{".000đ"}
                <label>Giá khuyến mãi:</label>
                <Input type="number" placeholder="Nhập giá khuyến mãi" />{".000đ"}
                <br></br>
                <br></br>
                <Checkbox >Sản phẩm mới</Checkbox>
                <br></br>
                <br></br>
                <Checkbox >Sản phẩm thích nhất </Checkbox>
                <br></br>
                <br></br>
                <Checkbox >Sản phẩm bán chạy nhất </Checkbox>
                <br></br>
                <br></br>
                <label>Số lượng:</label>
                <Input type="number" placeholder="Nhập số lượng" />
                <br></br>
                <br></br>
                <label>Mã Danh mục</label>
                <Input type="number" placeholder="Nhập mã danh mục 1,2,3,4,5,6 " />
                <br></br>
                <br></br>
                <div className="btn-action">
    
                <Button className="btn-cannel" ><NavLink to={"/product"}>Hủy</NavLink></Button>
                <Button type="primary">Thêm </Button>
                </div>
        
       
              </div>
            </Col>
            <Col span={6} pull={18}>
              <div className="menu">
                <div className="menu-item">
                  <NavLink to={"/dashboard"}>Dashboard</NavLink>
                </div>
                <div className="menu-item">
                  <NavLink to={"/product"}>Quản lý sản phẩm</NavLink>
                </div>
                <div className="menu-item">
                  <NavLink to={"/category"}>Quản lý Danh mục</NavLink>
                </div>
                <div className="menu-item">
                  <NavLink to={"/cart"}>Quản lý Đơn hàng</NavLink>
                </div>
                <div className="menu-item">
                  <NavLink to={"/user"}>Quản lý Khách Hàng</NavLink>
                </div>
                <div className="menu-item">
                  <NavLink onClick={() => handledLogout()}>Đăng xuất</NavLink>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      );
}

export default ProductForm;