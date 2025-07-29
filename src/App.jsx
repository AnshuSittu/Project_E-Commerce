import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShopCategory  from "./pages/ShopCategory";
import Products from "./pages/Products";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import LoginSignup from "./Pages/LoginSignup"
import Footer from "./Components/Footer/Footer";
import men_banner from "./assets/banner.jpg";
import women_banner from "./assets/women_banner.avif";
import kids_banner from "./assets/kids_banner.jpg";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/mens" element={<ShopCategory category="men" banner={men_banner} />} />
          <Route path="/womens" element={<ShopCategory category="women" banner={women_banner}/>} />
          <Route path="/kids" element={<ShopCategory category="kid" banner={kids_banner}/>} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:productId" element={<Products />} />
          <Route path="/cart" element={<Cart/>} />
             <Route path="/login" element={<LoginSignup/>}/>
        </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
