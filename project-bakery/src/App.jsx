import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavLinks from "./Components/NavLinks";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Outstand from "./pages/Outstand";
import NewsDetail from "./pages/NewsDetail";
import ProductCategory from "./pages/ProductCategory";
import Heart from "./pages/Heart";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import CartAccout from "./pages/CartAccout";
import PaymentSuccess from "./pages/PaymentSuccess";


function App() {
  return (
    
    <BrowserRouter>
    <NavLinks/>
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/home" element ={<Home/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/accont" element={<Account/>} />
        <Route path="/cart-accont" element={<CartAccout/>} />
        <Route path="/paymentsucces" element={<PaymentSuccess/>} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/category/:id" element={<ProductCategory />} />
        <Route path="/news" element ={<News/>}/>
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/outstand" element={<Outstand />} />
        <Route path="/heart" element={<Heart />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
