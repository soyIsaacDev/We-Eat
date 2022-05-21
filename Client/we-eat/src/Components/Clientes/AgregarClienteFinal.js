import React, { useState } from "react";
import { addClientes } from "../../Actions/APIMiddleware";

import style from "./agregarClienteFinal.module.css";

export default function AgregarClienteFinal() {
  
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
      setError("Favor de llenar todos los datos");
      console.log("Favor de llenar todos los datos");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    addClientes(input);
  };

  return (
    <form onSubmit={onSubmit}>
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
        <div className={style.alert}>{error}</div>
      ) : (
        <input type="submit" className={style.submit} />
      )}
    </form>
  );
}
