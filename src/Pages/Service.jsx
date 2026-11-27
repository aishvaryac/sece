
import React from "react";
import Count from "../hooks/Count";

const Service = () => {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-blue-50 p-8">
      <div className="w-full max-w-xl rounded-xl bg-white p-8 text-center shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-blue-800">
          Our Services
        </h1>

        <p className="mb-6 text-gray-600">
          Practice React useState with our interactive counter.
        </p>

        <Count />
      </div>
    </div>
  );
};

export default Service;
