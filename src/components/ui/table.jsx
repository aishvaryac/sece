
import React from "react";

const Table = ({ users = [] }) => {
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
            <tr key={user.id}>
              <td className="border p-3">{user.name}</td>
              <td className="border p-3">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
