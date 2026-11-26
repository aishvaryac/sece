
import { useEffect, useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("From useEffect");
  }, []);

  return (
    <div>
      <h2 className="text-4xl font-bold text-blue-700 mb-5">
        Count: {count}
      </h2>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="bg-green-600 text-white px-5 py-2 rounded-lg"
        >
          Increment +
        </button>

        <button
          onClick={() => setCount((c) => c - 1)}
          className="bg-red-600 text-white px-5 py-2 rounded-lg"
        >
          Decrement -
        </button>

        <button
          onClick={() => setCount(0)}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Count;
