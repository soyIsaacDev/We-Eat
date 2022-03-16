import React from "react";

import s from "./carrito.module.css";
import Articulo from "./ArticulosCarrito/Articulo";


export default function carrito_compras() {
  return (
      <div className={s.wrapper}>
        <div className={s.namewrapper}>
            <div className={s.name}>El Rinconcito Poniente</div>
            <div className={s.group}>G+</div>
        </div>
        <Articulo></Articulo> 
        <div className={s.SubtotalW}>
            <div className={s.subtotal}>Subtotal</div>
            <div className={s.cantidad}>$223.00</div>
        </div>      
        <div className={s.pagar}>Pagar</div>      
      </div>
  );
}
