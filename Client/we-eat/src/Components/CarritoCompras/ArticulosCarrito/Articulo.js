import React from "react";
import {  useSelector } from "react-redux";

import s from "./Articulo.module.css";


export default function Carrito_Compras() {
  const carrito = useSelector((state)=> state.carrito);
  return (
      <div className={s.wrapper}> 
        <div className={s.cantidad}>{carrito.cantidad}</div>
        <div className={s.platillo}>
            <div className={s.comida}>{carrito.platillo}</div>
            <div className={s.complementos}>Rojos</div>
        </div>
        <div className={s.precio}>$119.00</div>
      </div>
  );
}