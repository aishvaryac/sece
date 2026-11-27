
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 bg-blue-900 px-8 py-5 text-white shadow-lg">
      <h1 className="text-2xl font-bold">
        PulseWorks AI
      </h1>

      <div className="flex flex-wrap gap-6">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/about" className="hover:text-yellow-300">About</Link>
        <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
        <Link to="/service" className="hover:text-yellow-300">Service</Link>
        <Link to="/products" className="hover:text-yellow-300">Products</Link>
      </div>
    </nav>
  );
};

export default Navbar;
