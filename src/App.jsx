import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import SignIn from "./components/SignIn/SignIn";
import Checkout from "./components/Productos/Crear/Checkout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <AppBar /> */}
      <SignIn />
    </>
  );
}

export default App;
