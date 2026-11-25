import { useState } from "react";
import { Button } from "@/components/ui/button";

const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Count: {count}</h3>
      <Button onClick={() => setCount((c) => c + 1)}>Increase</Button>
    </div>
  );
};

export default Count;
