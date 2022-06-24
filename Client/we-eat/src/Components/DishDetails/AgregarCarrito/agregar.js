import React from "react";

import s from "./agregar.module.css";


export default function Agregar_Carrito(props) {
  return (
    <div className={s.whitewrapper}>
      <div className={s.wrapper}>
        <div className={s.addwrapper}>
          <div className={s.add}>Agregar</div>
          <div className={s.cantidad}>{props.cantidad}</div>
          <div className={s.cart}> al Carrito</div>
          <div className={s.precio}>${props.precio}.00</div>
        </div>
        
        
      </div>   
    </div>
    
  );
}
