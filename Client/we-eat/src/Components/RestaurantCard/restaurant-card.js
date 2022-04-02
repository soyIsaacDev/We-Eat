import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { addRestaurant } from "../../Actions/postFunctions";
import imagen from "./Quiriego-chico.jpg";
import style from "./restaurant-card.module.css";



export default function Restaurant_Card() {
 

  useEffect(() => {
    //NOT really an action for React-Redux but placed in actions file
    addRestaurant({ nombre:"Tuetano", direccion:"Morelos", area_de_reparto: 1, 
    actividad:"Abierto", estatus: "En_Registro", 
    nombreCorp: "We-Eat-Corp", direccionCorp: "Domicilio Corporativo"  });      
  }, []);

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
