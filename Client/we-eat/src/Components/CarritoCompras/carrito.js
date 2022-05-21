import React from "react";
import {  useSelector } from "react-redux";

import s from "./carrito.module.css";
import Articulo from "./ArticulosCarrito/Articulo";


export default function Carrito_Compras() {
  const restaurant = useSelector((state)=> state.loadedRestDetails.nombre)
  const carrito = useSelector((state)=> state.carrito);
  var subtotal = 0;
  carrito.map((c)=>{
    subtotal = subtotal + c.precio
  })
  
  return (
      <div className={s.wrapper}>
        <div className={s.namewrapper}>
            <div className={s.name}>{restaurant}</div>
            {/* <div className={s.group}>G+</div> */}
        </div>
        <Articulo></Articulo> 
        <div className={s.SubtotalW}>
            <div className={s.subtotal}>Subtotal</div>
            <div className={s.cantidad}>${subtotal}.00</div>
        </div>      
        <div className={s.pagar}>Pagar</div>      
      </div>
  );
}
