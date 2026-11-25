import Students from "./components/Students";
import Toggle from "./components/Toggle";
import Count from "./hooks/Count";
import { Button } from "@/components/ui/button";

const App = () => {
  const name = "test";

  return (
    <>
      <div className="pl-96 text-cyan-300 bg-blue-700">App</div>

      <Count />
      <Toggle />

      <Button variant="destructive">Delete</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>

      <h1>This is {name}</h1>
      <Students name="user" age={20} />
    </>
  );
};

export default App;
