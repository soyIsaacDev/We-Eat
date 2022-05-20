import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import s from "./dish-details.module.css";
import Extras from "./Extras/extras";
import AddPedido from "./AgregarCarrito/agregar";
import { addItem } from "../../Actions/actions";


export default function Dish_Details(props) {

  const platillos = useSelector((state)=> state.loadedPlatillos);
  const platilloId = useParams().id;
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
  const handleClick = function(e) {
    dispatch(addItem(
      {
        "platillo":platilloData.nombre, 
        "cantidad": 1
    }));
    navigate("/carrito");
  }

  return (
    <div className={s.wrapper}>
      <img className={s.img} src = {rutaImg} alt = {platilloData.nombre}></img> 
      <div className={s.platillo}>{platilloData.nombre} </div> 
      <div className={s.descripcion}>
        {platilloData.descripcion}
      </div>
      <div className={s.extras}>¿Deseas agregar extras? </div> 
      <div className={s.selecciona}>Selecciona hasta 6 </div> 
      <Extras></Extras>
      <button className={s.boton} onClick={(e) =>handleClick(e)}>
        <AddPedido precio = {platilloData.precio}></AddPedido>
      </button>
    </div>   
  );
}
