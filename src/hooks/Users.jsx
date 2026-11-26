
import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {

    // GET API
    const getUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        setUsers(response.data);
        console.log("GET Users:", response.data);
      } catch (error) {
        console.log("GET Error:", error.message);
      }
    };

    // POST API
    const addUser = async () => {
      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/users",
          {
            name: "Test",
            email: "test@gmail.com",
          }
        );

        console.log("POST - User Added:", response.data);
      } catch (error) {
        console.log("POST Error:", error.message);
      }
    };

    // DELETE API
    const deleteUser = async () => {
      try {
        const response = await axios.delete(
          "https://jsonplaceholder.typicode.com/users/1"
        );

        console.log("DELETE - User Deleted:", response.data);
      } catch (error) {
        console.log("DELETE Error:", error.message);
      }
    };

    getUsers();
    addUser();
    deleteUser();

  }, []);

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold text-blue-700 mb-4">
        User Details
      </h2>

      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="border p-3">Name</th>
            <th className="border p-3">Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-blue-50">
              <td className="border p-3">{user.name}</td>
              <td className="border p-3">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
