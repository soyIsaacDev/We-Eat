import React from "react";

import s from "./dish-details.module.css";
import platillo from "./chilaquiles.jpeg";
import Extras from "./Extras/extras";
import AddPedido from "./AgregarCarrito/agregar";


export default function dish_details() {
  return (
    <div className={s.wrapper}>
      <img className={s.img} src = {platillo} alt = "chilaquiles"></img> 
      <div className={s.platillo}>Detalles del Platillo </div> 
      <div className={s.descripcion}>
        Totpopos crujientes con la salsa de tu eleccion, crema, queso freso,
        cebolla morada, acompañada de frijoles y mix de verduras
      </div>
      <div className={s.extras}>¿Deseas agregar extras? </div> 
      <div className={s.selecciona}>Selecciona hasta 6 </div> 
      <Extras></Extras>
      <AddPedido></AddPedido>
    </div>   
  );
}
