import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import s from "./dish-details.module.css";
//import Extras from "./Extras/extras";
import AddPedido from "./AgregarCarrito/agregar";
import { addItem } from "../../Actions/actions";


export default function Dish_Details(props) {

  const restaurantId = useSelector((state) => state.loadedRestDetails.id);
  const platillos = useSelector((state)=> state.loadedPlatillos);
  const platilloId = useParams().id;
  const [cantidad, setCantidad] = useState(1);
  var platilloData =  0;
  var rutaImg = 0;
  
  platillos.map((p)=>{
    if(p.id === parseInt(platilloId)){
      platilloData = p;
      rutaImg = "http://localhost:4000/restaurantes/uploads/"+ platilloData.ImgPlatillo.name;
      return platilloData;
    }
  })
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleAdd = function(e){
    setCantidad(cantidad + 1);
  }
  const handleSubtract = function(e){
    setCantidad(cantidad - 1);
  }
  var precio = cantidad * platilloData.precio;

  const handleClick = function(e) {
    dispatch(addItem(
      {
        "platillo":platilloData.nombre, 
        "cantidad": cantidad,
        "precio": precio
    }));
    navigate(`/restaurantDetails/${restaurantId}`);
  }

  return (
    <div className={s.wrapper}>
      <img className={s.img} src = {rutaImg} alt = {platilloData.nombre}></img> 
      <div className={s.platillo}>{platilloData.nombre} </div> 
      <div className={s.descripcion}>
        {platilloData.descripcion}
      </div>
      {/* <Extras></Extras> */}
      <div className={s.cwrapper}>
        <button className={s.cboton} onClick={(e) =>handleSubtract(e)}> - </button>
        <div className={s.cboton} >{cantidad}</div>
        <button className={s.cboton} onClick={(e) =>handleAdd(e)}> +</button>
      </div>
      <button className={s.boton} onClick={(e) =>handleClick(e)}>
        <AddPedido precio = {precio} cantidad={cantidad}></AddPedido>
      </button>
    </div>   
  );
}
