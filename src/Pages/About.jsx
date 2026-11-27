import React from "react";
import Count from "../hooks/Count";
import Parent from "../components/Parent";
import StudentContext from "../content/StudentContext";

const About = () => {
  const Student = "Aishwarya";

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-slate-100 p-8">
      <div className="w-full max-w-xl rounded-xl bg-white p-10 text-center shadow-lg">

        <h1 className="text-4xl font-bold text-blue-800">
          About Us
        </h1>

        <p className="mt-5 text-lg text-gray-600">
          This website is created to practice React JS,
          JavaScript, components, hooks and API integration.
        </p>

        <Count />

        <StudentContext.Provider value={Student}>
          <Parent />
        </StudentContext.Provider>

      </div>
    </div>
  );
};

export default About;