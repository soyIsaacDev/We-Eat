import React from "react";
import { Link } from 'react-router-dom';

import s from "./navBar.module.css";

import inicio from "./start.png";
import cuenta from "./account.png";
import oferta from "./sale.png";
import carrito from "./burger-cart.png";

export default function NavBar() {
  return (
      <div className={s.navBar}>
          <button className={s.menu_button}>
            <img src= {inicio} alt="Inicio"></img>
          </button>          
          <button className={s.menu_button}>
            <img src= {cuenta} alt="Cuenta"></img>
          </button>
          <button className={s.menu_button}>
            <img src= {oferta} alt="Oferta"></img>
          </button>
          <Link to= "/Carrito">
            <button className={s.menu_button}>
              <img src= {carrito} alt="Carrito"></img>
            </button>
          </Link>
      </div>
  );
}