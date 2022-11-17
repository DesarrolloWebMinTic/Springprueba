import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import SignIn from "./components/SignIn/SignIn";
import CrearProducto from "./components/Productos/Crear/CrearProducto";
import Informacion from "./components/Productos/Crear/Informacion";
import MediaCard from "./components/Productos/Computo/Cards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppBar />
      {/* <SignIn /> */}
      {/* <MediaCard /> */}
      {/* <Informacion /> */}
    </>
  );
}

export default App;
