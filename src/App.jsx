import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShopCategory  from "./pages/ShopCategory";
import Products from "./pages/Products";
import Shop from "./pages/shop";
import Cart from "./pages/Cart";
import loginSignUp from "./pages/loginSignUp";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/mens" element={<ShopCategory category="mens" />} />
          <Route path="/womens" element={<ShopCategory category="womes" />} />
          <Route path="/kids" element={<ShopCategory category="kids" />} />
          <Route path="/product" element={<Products />} />
          <Route path=":/productId" element={<Products />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<loginSignUp/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
