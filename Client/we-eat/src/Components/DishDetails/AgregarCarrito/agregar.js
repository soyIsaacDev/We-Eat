import React from "react";

import s from "./agregar.module.css";


export default function agregar_carrito() {
  return (
    <div className={s.whitewrapper}>
      <div className={s.wrapper}>
        <div className={s.add}>Agregar al Carrito</div>
        <div className={s.precio}>$65.00</div>
      </div>   
    </div>
    
  );
}
