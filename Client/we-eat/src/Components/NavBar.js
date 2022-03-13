import React from "react";

import s from "./navBar.module.css";

import logo from "./logo.jpg";
import burger from "./menu.png";


export default function restaurant_card() {
  return (
      <div className={s.navBar}>
          <div className={s.menu}>
            <img className={s.burger} src={burger} alt = "hamburger menu"></img>
          </div>
          <img className={s.logo} src = {logo} alt = "Imagen Logo"></img>
          <div className={s.entrega}>Entrega a domicilo</div>
          <div className={s.recolectar}>Recolectar</div>
          <div className={s.domicilio}>Domicilio</div>
          <div className={s.inputwrap}>
            <input className={s.input} placeholder="Buscar"></input>
          </div>
          <div className={s.ultimos}>
            <button className={s.carrito}>Carrito</button>
          </div>
          <div className={s.ultimos}>
            <button className={s.init}>Iniciar sesión</button>
          </div>
          
      </div>
  );
}