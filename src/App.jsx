import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import SignIn from "./components/SignIn/SignIn";
import CrearProducto from "./components/Productos/Crear/CrearProducto";
import Informacion from "./components/Productos/Crear/Informacion";
import MediaCard from "./components/Productos/Computo/Cards";
import Content from "./components/AppBar/Content";
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <AppBar />
      <Content />
    </BrowserRouter>
  );
}

export default App;
