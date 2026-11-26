import { useState } from "react";
import { Button } from "@/components/ui/button";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <h3>Toggle is {isOn ? "ON" : "OFF"}</h3>
      <Button
        variant={isOn ? "default" : "outline"}
        onClick={() => setIsOn((prev) => !prev)}
      >
        {isOn ? "Turn OFF" : "Turn ON"}
      </Button>
    </div>
  );
};

export default Toggle;
