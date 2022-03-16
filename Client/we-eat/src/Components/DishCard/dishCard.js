import React from "react";

import s from "./dishCard.module.css";
import platillo from "./chilaquiles.jpeg";


export default function dish_card() {
  return (
      <div className={s.dishWrapper}>
          <div className={s.data}>
            <div className={s.title}>Chilaquiles</div>
            <div className={s.precio}>$99.00</div>
            <div className={s.descripcion}>
                Totpopos crujientes con la salsa de tu eleccion, crema, queso freso,
                cebolla morada, acompañada de frijoles y mix de verduras
            </div>
          </div>
          <div className={s.imgWraper}>
            <img className={s.img} src={platillo} alt="platillo"></img> 
          </div>
                   
      </div>
  );
}
