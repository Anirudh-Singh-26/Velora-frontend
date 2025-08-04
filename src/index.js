import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './index.css';
import Homepage from './landing_page/home/Homepage';
import SignUp from "./landing_page/signup/Signup";
import About from "./landing_page/about/AboutPage";
import Product from "./landing_page/products/ProductPage";
import Pricing from "./landing_page/pricing/PricingPage";
import Support from "./landing_page/support/SupportPage";
import NotFound from "./landing_page/NotFound";
import Navbar from './landing_page/Navbar';
import Foooter from './landing_page/Footer';
import Login from './landing_page/login/Login';
import ScrollToTop from "./components/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/support" element={<Support />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Foooter />
  </BrowserRouter>
);
