import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import s from "./dishCard.module.css";
import platillo from "./chilaquiles.jpeg";


export default function dish_card(props) {
  //const dispatch = useDispatch();

  

  return (
      <div className={s.dishWrapper}>
          <div className={s.data}>
            <div className={s.title}>{props.nombrePlatillo}</div>
            <div className={s.precio}>${props.precio}</div>
            <div className={s.descripcion}>
                {props.descripcion}
            </div>
          </div>
          <div className={s.imgWraper}>
            <img className={s.img} src={props.imagen} alt="platillo"></img> 
          </div>
                   
      </div>
  );
}
