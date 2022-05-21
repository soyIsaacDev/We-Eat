import React from "react";
import {  useSelector } from "react-redux";

import s from "./Articulo.module.css";


export default function Carrito_Compras() {
  const carrito = useSelector((state)=> state.carrito);
  
  if(Object.keys(carrito).length>0){
    return(
      carrito.map((c)=>{
        return (
          <div className={s.wrapper}> 
            <div className={s.cantidad}>{c.cantidad}</div>
            <div className={s.platillo}>
                <div className={s.comida}>{c.platillo}</div>
                <div className={s.complementos}></div>
            </div>
            <div className={s.precio}>${c.precio}.00</div>
          </div>
        );
      })
    )
  } else{
    return(<div>Loading</div>)
  }
  
}