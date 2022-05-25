import React from "react";
import {  useSelector } from "react-redux";

import s from "./carrito.module.css";
import Articulo from "./ArticulosCarrito/Articulo";


export default function Carrito_Compras() {
  const restaurant = useSelector((state)=> state.loadedRestDetails.nombre)
  const carrito = useSelector((state)=> state.carrito);
  const cliente = useSelector((state) => state.loginState.ClientefinalId)
  var subtotal = 0;
  carrito.map((c)=>{
    subtotal = subtotal + c.precio
  })
  function handleClick(e){
    console.log("Colocar Pedido " + carrito);
    console.log("Del Cliente " + cliente)
  }

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
        <button className={s.pagar} onClick={(e) => handleClick(e)}>Pagar</button>    
      </div>
  );
}
