
import React from "react";
import Register from "./hooks/Register";
import Count from "./hooks/Count";
import Users from "./hooks/Users";
import Toggle from "./components/Toggle";
import Students from "./components/Students";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <header className="bg-blue-800 text-white text-center p-8 rounded-xl mb-8 shadow-lg">
        <h1 className="text-3xl font-bold">
          Welcome to MERN Stack Engineer
        </h1>
        <p className="mt-2 text-blue-100">
          React JS - Practical Workout Dashboard
        </p>
      </header>

      <div className="max-w-4xl mx-auto space-y-6">

        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-blue-700 mb-5">
            01. Register Form
          </h2>
          <Register />
        </section>

        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-blue-700 mb-5">
            02. Counter Application
          </h2>
          <Count />
        </section>

        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-blue-700 mb-5">
            03. Toggle Button
          </h2>
          <Toggle />
        </section>

        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-blue-700 mb-5">
            04. API Users Table
          </h2>
          <Users />
        </section>

        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-blue-700 mb-5">
            05. Students Component
          </h2>
          <Students name="user" age={20} />
        </section>

      </div>

      <footer className="text-center text-gray-500 mt-8">
        MERN Stack Engineer | React Practice
      </footer>

    </div>
  );
};

export default App;
