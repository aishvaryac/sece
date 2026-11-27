
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/ui/Navbar";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
