import { Route, Routes } from "react-router-dom";
import SignIn from "../../components/SignIn/SignIn";
import CrearProducto from "../../components/Productos/Crear/CrearProducto";
import Informacion from "../../components/Productos/Crear/Informacion";

export default function Content() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/crear" element={<CrearProducto />} />
      <Route path="/informacion" element={<Informacion />} />
    </Routes>
  );
}
