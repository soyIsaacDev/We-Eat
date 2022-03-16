import React from "react";
import { Link } from 'react-router-dom';

import imagen from "./Quiriego-chico.jpg";
import style from "./restaurant-card.module.css";


export default function restaurant_card() {
  return (
    <Link to={`/RestaurantDetails`}>
      <div className={style.restcardwrap}>
        <img clasName={style.img} src={imagen} alt="Imagen Restaurant" />
        <div className={style.rnamewrap}>
            <div className={style.rname}>El Rinconcito</div>
            <div className={style.calif}>4.6</div>
        </div>
        <div className={style.enviowrap}>
          <div className={style.cenvio}>Costo de envio:</div>
          <div className={style.penvio}>$9</div>
          <div className={style.tenvio}>35-45 min</div>
        </div>
      </div>
    </Link>
    
  );
}
