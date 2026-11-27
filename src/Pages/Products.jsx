
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products"
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return <h2 className="p-10 text-center">Loading Products...</h2>;
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-blue-800">
        Our Products
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-xl bg-white p-5 shadow-md transition hover:shadow-xl"
          >
            <img
              src={product.image}
              alt={product.title}
              className="mx-auto h-48 w-full object-contain"
            />

            <h3 className="mt-4 font-bold text-gray-800">
              {product.title}
            </h3>

            <p className="mt-3 text-xl font-bold text-green-700">
              ${product.price}
            </p>

            <p className="mt-2 text-gray-600">
              Category: {product.category}
            </p>

            <p className="mt-2 text-yellow-600">
              Rating: {product.rating?.rate} / 5
              {" "}({product.rating?.count} reviews)
            </p>

            <Link
              to={`/productDetails/${product.id}`}
              className="mt-5 inline-block rounded-lg bg-blue-700 px-5 py-2 text-white hover:bg-blue-800"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
