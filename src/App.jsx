import { useState } from "react";
import HOC from "./components/HOC";
import Child from "./components/Child";

const App = () => {
  const [count, setCount] = useState(0);

  const authStatus = false;

  return (
    <div>
      <HOC authStatus={authStatus}>
        <Child></Child>
      </HOC>
    </div>
  );
};

export default App;
