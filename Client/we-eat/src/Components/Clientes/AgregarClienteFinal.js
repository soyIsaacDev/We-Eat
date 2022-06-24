import React, { useState } from "react";
import { addClientes } from "../../Actions/APIMiddleware";
import { useNavigate } from "react-router-dom";

import s from "./agregarClienteFinal.module.css";

export default function AgregarClienteFinal() {
  let navigate = useNavigate();

  const [input, setInput] = useState({
    nombre: "",
    usuario: "",
    contraseña: ""
  });
  const [error, setError] = useState(true);

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    if (input.nombre && input.usuario && input.contraseña !== "") {
      setError(false);
    } else {
      setError("Favor de llenar todos tus datos");
      console.log("Favor de llenar todos los datos");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    addClientes(input);
    navigate(`/`);
  };

  return (
    <div className={s.allwrapper}>
      
      <form onSubmit={onSubmit} className={s.form}>
      <h1>Bienvenido a We Eat</h1>
      <h3>Por favor agrega tus datos</h3>
        <input
          name="nombre"
          value={input.nombre}
          placeholder="Nombre"
          onChange={(e) => handleInputChange(e)}
        />
        <input
          name="usuario"
          value={input.usuario}
          placeholder="Usuario"
          onChange={(e) => handleInputChange(e)}
        />
        <input
          name="contraseña"
          value={input.contraseña}
          placeholder="contraseña"
          onChange={(e) => handleInputChange(e)}
          type="password"
        />
        
        {error ? (
          <div className={s.alert}>{error}</div>
        ) : (
          <input type="submit" className={s.submit} />
        )}
      </form>
    </div>
  );
}
