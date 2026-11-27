
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getProductDetails = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );

      setProduct(response.data);
    } catch (error) {
      console.error(error);
      setError("Unable to fetch product details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, [id]);

  if (loading) {
    return <h2 className="p-10 text-center">Loading Product...</h2>;
  }

  if (error || !product) {
    return (
      <h2 className="p-10 text-center text-red-600">
        {error || "Product not found"}
      </h2>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto grid max-w-5xl gap-8 rounded-xl bg-white p-8 shadow-lg md:grid-cols-2">

        <div className="flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 w-full object-contain"
          />
        </div>

        <div>
          <h1 className="mb-4 text-3xl font-bold text-blue-800">
            {product.title}
          </h1>

          <p className="mb-4 text-gray-600">
            {product.description}
          </p>

          <h2 className="mb-4 text-2xl font-bold text-green-700">
            ${product.price}
          </h2>

          <p className="mb-3">
            <b>Product ID:</b> {product.id}
          </p>

          <p className="mb-3">
            <b>Category:</b> {product.category}
          </p>

          <p className="mb-6">
            <b>Rating:</b> {product.rating?.rate} / 5
          </p>

          <p className="mb-6">
            <b>Reviews:</b> {product.rating?.count}
          </p>

          <Link
            to="/"
            className="rounded-lg bg-blue-700 px-6 py-3 text-white hover:bg-blue-800"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
