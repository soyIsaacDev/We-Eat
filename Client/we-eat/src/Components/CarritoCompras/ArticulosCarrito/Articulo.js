import React from "react";

import s from "./Articulo.module.css";


export default function carrito_compras() {
  return (
      <div className={s.wrapper}> 
        <div className={s.cantidad}>1</div>
        <div className={s.platillo}>
            <div className={s.comida}>Chilaquiles</div>
            <div className={s.complementos}>Rojos</div>
        </div>
        <div className={s.precio}>$119.00</div>
      </div>
  );
}