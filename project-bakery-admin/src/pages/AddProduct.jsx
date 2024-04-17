import React, { useState, useEffect } from "react";
import { Col, Row ,Alert} from "antd";
import { NavLink } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Input, Checkbox, Dropdown } from "antd";
import ProductService from "../services/ProductService";
import axios from "axios";
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const AddProduct = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: "",
    des: "",
    images: "",
    price: "0",
    discount: "0",
    product_new: false,
    product_like: false,
    best_seller: false,
    product_quantity: "1",
    id_category: "1",

    // Thêm các trường dữ liệu khác tại đây
  });

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = async () => {
    try {
      await axios.post("http://localhost:3000/products", newProduct);
      fetchProducts();
      setNewProduct({
        title: "",
        des: "",
        images: "",
        price: "0",
        discount: "0",
        product_new: false,
        product_like: false,
        best_seller: false,
        product_quantity: "1",
        id_category: "1",

        // Đặt giá trị mặc định cho các trường dữ liệu khác tại đây
      
      });

      setTimeout(() => {
        console.error(" adding product");
        <Alert message="Đã thêm thành công" type="success" />
      }, 2000);

      window.location.href= "/product";
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

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
            <Input 
                  placeholder="Nhập tên sản phẩm" 
                  type="text" 
                  value={newProduct.title}
                  onChange={(e) => setNewProduct({...newProduct,title: e.target.value})}
            />
            <br></br>
            <br></br>
            <label>Mô tả:</label>
            <TextArea 
                  rows={4} 
                  placeholder="Mô tả sản phẩm" 
                  maxLength={1000} 
                  value={newProduct.des}
                  onChange={(e) => setNewProduct({...newProduct,des: e.target.value})}
            />
            <br></br>
            <br></br>
            <label>Link hình ảnh:</label>
            <Input 
                  placeholder="Nhập link hình ảnh" 
                  value={newProduct.images}
                  onChange={(e) => setNewProduct({...newProduct,images: e.target.value})}
            />
            <br></br>
            <br></br>
            <label>Giá:</label>
            <Input 
                  type="number" 
                  placeholder="Nhập giá sản phẩm" 
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({...newProduct,price: e.target.value})}
            />
            {".000đ"}
            <br></br>
            <br></br>
            <label>Giá khuyến mãi:</label>
            <Input 
                  type="number" 
                  placeholder="Nhập phần trăm khuyến mãi" 
                  value={newProduct.discount}
                  onChange={(e) => setNewProduct({...newProduct,discount: e.target.value})}
            />
            {"%"}
            <br></br>
            <br></br>
            <Checkbox
                checked={newProduct.product_new}
                onChange={(e) => setNewProduct({...newProduct,product_new:!newProduct.product_new})}
            
            >Sản phẩm mới</Checkbox>
            <br></br>
            <br></br>
            <Checkbox
                checked={newProduct.product_like}
                onChange={(e) => setNewProduct({...newProduct,product_like:!newProduct.product_like})}
            
            >Sản phẩm thích nhất </Checkbox>
            <br></br>
            <br></br>
            <Checkbox
                checked={newProduct.best_seller}
                onChange={(e) => setNewProduct({...newProduct,best_seller:!newProduct.best_seller})}
            
            >Sản phẩm bán chạy nhất </Checkbox>
            <br></br>
            <br></br>
            <label>Số lượng:</label>
            <Input 
                  type="number" 
                  placeholder="Nhập số lượng"
                  value={newProduct.product_quantity}
                  onChange={(e) => setNewProduct({...newProduct, product_quantity:  e.target.value})}
             />
            <br></br>
            <br></br>
            <label>Mã Danh mục</label>
            <Input 
                  type="number" 
                  placeholder="Nhập mã danh mục 1,2,3,4,5,6 " 
                  value={newProduct.id_category}
                  onChange={(e) => setNewProduct({...newProduct,id_category: e.target.value})}
            />
            <br></br>
            <br></br>
            <div className="btn-action">
              <Button className="btn-cannel">
                <NavLink to={"/product"}>Hủy</NavLink>
              </Button>
              <Button type="primary" onClick={addProduct}>Thêm </Button>
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
};

export default AddProduct;
