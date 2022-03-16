import React from "react";
import { Link } from "react-router-dom";

import s from "./r-details.module.css";
import DishCard from "../DishCard/dishCard";

import banner from "./RestBanner.jpeg";
import star from "./star.png";
import food from "./food-tray-a.png";
import busqueda from "./lupa-a.png";

export default function restaurant_card() {
  return (
      <div className={s.wrapper}>
          <img className={s.img} src={banner} alt="Banner de Restaurant"></img>
          <div className={s.infoWrapper}>
            <div className={s.restname}>El Rinconcito Poniente</div>
            <div className={s.datos}>
                <img  className={s.icon} src={star} alt="Estrella Calificacion"></img>
                <div className={s.calificacion}>4.6 (70 calificaciones)</div>
                <div className={s.tiempoComida}>Desayuno y brunch</div>
                <div className={s.precio}>$$$$</div>
                <img  className={s.icon} src={food} alt="Envio Comida"></img>
            </div>
            <div className={s.envio}>
                <div className={s.tiempo}>15-25min</div>
                <div className={s.costo}>Costo de envio: $55</div>
            </div>
            <div className={s.envio}>Toca para ver los horarios, dirrección y mas</div>
            <div className={s.menuWraper}>
                <div className={s.menu}>Menú</div>
                <img  className={s.busqueda} src={busqueda} alt="Busqueda"></img>
            </div>
            <div className={s.seleccion}>Seleccionado para ti</div>
            <Link to = "/DishDetail">
                <DishCard></DishCard>
            </Link>
            

          </div>        
      </div>
  );
}
