
import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <div className="flex min-h-[50vh] flex-col items-center justify-center bg-blue-50 p-8">
        <h1 className="text-5xl font-bold text-blue-800 text-center">
        Product
        </h1>

        <p className="mt-5 text-xl text-gray-600">
    
        </p>
      </div>

      {/* Display all products on Home page */}
      <Products />
    </div>
  );
};

export default Home;
