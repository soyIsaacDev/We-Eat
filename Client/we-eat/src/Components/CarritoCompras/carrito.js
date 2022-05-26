import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import s from "./carrito.module.css";
import Articulo from "./ArticulosCarrito/Articulo";
import { addPedido } from "../../Actions/APIMiddleware";
import { deleteCart } from "../../Actions/actions";


export default function Carrito_Compras() {
  const dispatch = useDispatch();

  const restaurant = useSelector((state)=> state.loadedRestDetails)
  const carrito = useSelector((state)=> state.carrito);
  const clienteId = useSelector((state) => state.loginState.ClientefinalId)
  const [pedido, setPedido] = useState({
    cantidad: "",
    nombrePlatillo: "",
    notas: "",
    idCliente: clienteId,
    idRestaurant: restaurant.id,
    status: "Colocado"
  });
  useEffect(() => {
    carrito.map((i)=>{
      setPedido({
        ...pedido,
        cantidad: i.cantidad,
        nombrePlatillo: i.nombrePlatillo,
        notas: "sin Mantequilla"
      })
    });
  }, []);

  var subtotal = 0;
  carrito.map((c)=>{
    subtotal = subtotal + c.precio
  })
  function handleClick(e){
    /* carrito.map((i)=>{
      setPedido({
        ...pedido,
        cantidad: i.cantidad,
        nombrePlatillo: i.nombrePlatillo,
        notas: "sin Mantequilla"
      }) */
      
      dispatch(addPedido(pedido));
      
      console.log("Colocar Pedido " + JSON.stringify(pedido));
    /* }); */
    //dispatch(deleteCart());
  }

  return (
      <div className={s.wrapper}>
        <div className={s.namewrapper}>
            <div className={s.name}>{restaurant.nombre}</div>
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
