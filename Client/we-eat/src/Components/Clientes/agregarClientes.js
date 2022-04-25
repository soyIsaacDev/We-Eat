import React, { useState } from "react";
import { addClientes } from "../../Actions/postFunctions";

import style from "./agregarClientes.module.css";

export default function AgregarClientes() {
  const [input, setInput] = useState({
    nombre: "",
    usuario: "",
    contraseña: "",
  });
  const [error, setError] = useState(true);

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    if (input.nombre && input.usuario && input.contraseña != "") {
      setError(false);
    } else {
      console.log("Favor de llenar todos los campos");
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
        <div className={style.alert}>Por favor llena todos los campos</div>
      ) : (
        <input type="submit" className={style.submit} />
      )}
    </form>
  );
}
