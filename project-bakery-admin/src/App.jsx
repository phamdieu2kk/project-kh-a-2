import React, { useContext, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import User from "./pages/User";
import AddProduct from "./pages/AddProduct";
import DetailCart from "./pages/DetailCart";

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product" element={<Product />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/category" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail-cart/:id" element={<DetailCart />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
