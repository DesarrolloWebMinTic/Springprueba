import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import useAuth from "../hooks/useAuth";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";

import imgLogin from "../assets/tech3.png";
import fondoLogin from "../assets/fondo-login.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const handleSudmit = async (e) => {
    e.preventDefault();
    console.log("Validacion");
    if ([email, password].includes("")) {
      setAlerta({ msg: "Todos los Campos son Obligatorios", error: true });
      return;
    }

    // Auntenticar al usuario

    try {
      const { data } = await clienteAxios.post("usuarios/login", {
        email,
        password,
      });

      localStorage.setItem("token", data.token);
      // console.log(data);
      // Validar la redireccion
      setAuth(data);
      navigate("/perfil");
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alerta;

  return (
    <div className="flex w-full">
      <div className="h-full w-0 bg-sky-500 lg:w-full">
        <img src={imgLogin} alt="imagen login" className="h-full w-screen" />
      </div>
      <div className="flex flex-col justify-center items-center lg:w-2/4 mr-10 md:flex-row ">
        <img
          src={fondoLogin}
          alt="imagen login"
          className="relative w-0 md:w-1/2 lg:w-0 sm:w-0"
        />

        <div>
          <h1 className="font-awesome text-4xl  text-center md:w-2/3 mx-auto text-red-500">
            iMARKET
          </h1>
          <h2 className="text-2xl text-center uppercase text-blue-400 mb-5">
            para desarrolladores{" "}
            {/* <span className="text-red-400">productos</span>  */}
          </h2>
          <form
            className="p-4 mx-auto w-96 sm:px-9 mt-8 shadow-md"
            onSubmit={handleSudmit}
          >
            {msg && <Alerta alerta={alerta} />}

            <div className="mb-5">
              <label htmlFor="email" className="font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                placeholder="ejemplo: correo@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="font-medium">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                placeholder="*********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* <input
              type="submit"
              value="Ingresar"
              className="uppercase bg-red-400 text-white p-2 rounded-md w-full"
            /> */}
            <button
              type="submit"
              className="uppercase bg-red-400 text-white p-2 rounded-md w-full hover:bg-sky-600 transition duration-300 ease-in-out focus:outline-none "
            >
              Ingresar
            </button>

            <div className="flex justify-between px-4 mt-5 text-slate-500 ">
              <Link to="/registro" className="">
                ¿No tienes cuenta?
              </Link>
              <Link to="/olvide-password">¿Olvidaste tu contraseña?</Link>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="h-full w-0 bg-sky-500 lg:w-full">
        <img src={imgLogin} alt="imagen login" className="h-full w-screen" />
      </div> */}
    </div>
  );
};

export default Login;
