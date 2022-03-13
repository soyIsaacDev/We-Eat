import React from "react";
import imagen from "./Quiriego-chico.jpg";
import style from "./restaurant-card.module.css";

export default function restaurant_card() {
  return (
      <div className={style.imagenwrap}>
        <img clasName={style.img} src={imagen} alt="Imagen Restaurant" />
        <div className={style.rnamewrap}>
            <div className={style.rname}>Nombre Rest</div>
            <div className={style.calif}>4.6</div>
        </div>
        
        <div className={style.cenvio}>Costo de envio:</div>
      </div>
  );
}
