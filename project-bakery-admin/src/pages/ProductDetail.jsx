import React, { useState, useEffect } from "react";
import { Col, Row } from "antd";
import { Button, DatePicker, Input, Checkbox, Dropdown } from "antd";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
const { TextArea } = Input;
import axios from "axios";

const ProductDetail = () => {
  const [products, setProducts] = useState({
    data: null,
    isLoading: false,
  });
  useEffect(() => {
    (async () => {
      setProducts((prev) => ({ ...prev, isLoading: true }));
      const { data: _data } = await axios.get("http://localhost:3000/products");
      setProducts({ data: _data, isLoading: false });
    })();
  }, []);

  const params = useParams();
  const [editProducts, setEditProducts] = useState(null);

  useEffect(() => {
    if (products.data != null) {
      console.log(params.id);
      const detailProduct = products.data.find(
        (item) => item.id === +params.id
      );
      setEditProducts(detailProduct);
    }
  }, [products.data, params]);

  
  
  const updateProduct = async () => {
    try {
      
      await axios.put(`http://localhost:3000/products/${params.id}`, editProducts);
      window.location.href = "/product";
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };


  return (
    <div>
      <Row>
        <Col span={18} push={6}>
          <div className="item-add">
            <NavLink to={"/product"}>Quản lý sản phẩm</NavLink> {" >  "}{" "}
            <label>Sửa sản phẩm </label>
          </div>
          <h3>Sửa Sản phẩm</h3>
          {editProducts && (
            <div className="form-product">
              <label>Tên sản phẩm:</label>
              <Input
                type="text"
                value={editProducts.title}
                onChange={(e) => setEditProducts({ ...editProducts, title: e.target.value })}
              />
              <br></br>
              <br></br>
              <label>Mô tả:</label>
              <TextArea
                rows={4}
                placeholder="Mô tả sản phẩm"
                maxLength={1000}
                value={editProducts.des}
                onChange={(e) => setEditProducts({ ...editProducts, des: e.target.value })}
              />
              <br></br>
              <br></br>
              <label>Link hình ảnh:</label>
              <Input 
                    placeholder="Nhập link hình ảnh" 
                    value={editProducts.images}
                    onChange={(e) => setEditProducts({ ...editProducts, images: e.target.value })}
              />
              <br></br>
              <br></br>
              <label>Giá:</label>
              <Input 
                    type="number" 
                    placeholder="Nhập giá sản phẩm" 
                    value={editProducts.price}
                    onChange={(e) => setEditProducts({ ...editProducts, price: e.target.value })}
              />
              {".000đ"}
              <br></br>
              <br></br>
              <label>Giá khuyến mãi:</label>
              <Input
                     type="number" 
                     placeholder="Nhập phần trăm khuyến mãi"
                     value={editProducts.discount}
                      onChange={(e) => setEditProducts({ ...editProducts, discount: e.target.value })}
               />
              {"%"}
              <br></br>
              <br></br>
              <Checkbox
                    checked={editProducts.product_new}
                    onChange={(e) => setEditProducts({ ...editProducts,product_new:!editProducts.product_new})}
              >Sản phẩm mới</Checkbox>
              <br></br>
              <br></br>
              <Checkbox
                 checked={editProducts.product_like}
                 onChange={(e) => setEditProducts({ ...editProducts,product_like:!editProducts.product_like})}
              >Sản phẩm thích nhất </Checkbox>
              <br></br>
              <br></br>
              <Checkbox
                checked={editProducts.best_seller}
                onChange={(e) => setEditProducts({ ...editProducts,best_seller:!editProducts.best_seller})}
              >Sản phẩm bán chạy nhất </Checkbox>
              <br></br>
              <br></br>
              <label>Số lượng:</label>
              <Input 
                    type="number" 
                    placeholder="Nhập số lượng" 
                    value={editProducts.product_quantity}
                      onChange={(e) => setEditProducts({ ...editProducts, product_quantity: e.target.value })}
              />
              <br></br>
              <br></br>
              <label>Mã Danh mục</label>
              <Input
                type="number"
                placeholder="Nhập mã danh mục 1,2,3,4,5,6 "
                value={editProducts.id_category}
                      onChange={(e) => setEditProducts({ ...editProducts, id_category
                        : e.target.value })}
              />
              <br></br>
              <br></br>
              <div className="btn-action">
                <Button className="btn-cannel">
                  <NavLink to={"/product"}>Hủy</NavLink>
                </Button>
                <Button type="primary" onClick={updateProduct}>Cập nhật </Button>
              </div>
            </div>
          )}
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

export default ProductDetail;
