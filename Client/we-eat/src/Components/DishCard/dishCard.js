import React from "react";

import "./dishCard.css";


export default function dish_card(props) {
  
  return (
      <div className="dishWrapper">
          <div className="data">
            <div className="title">{props.nombrePlatillo}</div>
            <div className="precio">MX ${props.precio}</div>
            <div className="descripcion"> {props.descripcion} </div>
          </div>
          <div className="imgWraper">
            <img className="img_dishCard" src={props.imagen} alt="platillo"></img> 
          </div>
                   
      </div>
  );
}
