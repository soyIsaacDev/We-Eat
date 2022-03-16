import React from "react";

import s from "./extras.module.css";
import checkbox from "./unchecked.png";

export default function extras() {
  return (
    <div className={s.wrapper}> 
        <img className={s.img} src={checkbox} alt = "cuadro seleccion"></img>
        <div className={s.ingrediente}> Chorizo </div>
        <div className={s.precio}> $15.00 c/u</div>
    </div>   
  );
}