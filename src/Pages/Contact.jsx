
import React from "react";
import Register from "../hooks/Register";

const Contact = () => {
  return (
    <div className="min-h-[80vh] bg-slate-100 p-8">
      <div className="mx-auto max-w-xl rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-blue-800">
          Contact / Register
        </h1>

        <Register />
      </div>
    </div>
  );
};

export default Contact;
