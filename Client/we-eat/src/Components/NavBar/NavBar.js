import React from "react";
import { Link } from 'react-router-dom';

import s from "./navBar.module.css";

import inicio from "./start.png";
import cuenta from "./account.png";
import oferta from "./sale.png";
import carrito from "./burger-cart.png";
import delivery from "./take-away.png";

export default function NavBar() {
  return (
      <div className={s.navBar}>
          <Link to= "/Restaurantes">
            <button className={s.menu_button}>
              <img src= {inicio} alt="Inicio"></img>
            </button>
          </Link> 
          <Link to= "/Carrito">
            <button className={s.menu_button}>
              <img src= {carrito} alt="Carrito"></img>
            </button>
          </Link>
          <Link to= "/pedido">
            <button className={s.menu_button}>
            <img src= {delivery} alt="Status Orden"></img>
            </button>
          </Link>
      </div>
  );
}