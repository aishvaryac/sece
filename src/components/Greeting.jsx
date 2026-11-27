import React, { useContext } from "react";
import StudentContext from "../content/StudentContext";

const Greeting = () => {
  const StudentName = useContext(StudentContext);

  return (
    <h2>Greeting, {StudentName}</h2>
  );
};

export default Greeting;