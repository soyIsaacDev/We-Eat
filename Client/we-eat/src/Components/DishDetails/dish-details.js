import React, { useEffect, useState } from "react";
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
  //const [cantidad, setCantidad] = useState(1);
  var platilloData =  0;
  var rutaImg = 0;

  
  
  platillos.map((p)=>{
    if(p.id === parseInt(platilloId)){
      platilloData = p;
      rutaImg = "http://localhost:4000/restaurantes/uploads/"+ platilloData.ImgPlatillo.name;
      return platilloData;
    }
  })

  
  /* console.log("CANTIDAD "+ cantidad);
  console.log("PRECIO "+price) */
  const [input, setInput] = useState({
    nombrePlatillo: platilloData.nombre,
    cantidad: 1,
    precio: platilloData.precio,
    notas: ""
  });

  const dispatch = useDispatch();
  let navigate = useNavigate();
  var qty = input.cantidad
  const handleAdd = function(e){
    //setCantidad(cantidad + 1);
    
    setInput({
      ...input,
      cantidad: qty + 1,
      precio: (qty + 1) * platilloData.precio
    });
  }
  const handleSubtract = function(e){
    //setCantidad(cantidad - 1);
    setInput({
      ...input,
      cantidad: qty - 1,
      precio: (qty + 1) * platilloData.precio
    });
  }
  
  const handleInputChange = function(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    console.log(input)
  }
  
  const handleClick = function(e) {
    dispatch(addItem(input));
    navigate(`/restaurantDetails/${restaurantId}`);
  }

  console.log(JSON.stringify(input));

  
  return (
    <div className={s.wrapper}>
      <img className={s.img} src = {rutaImg} alt = {platilloData.nombre}></img> 
      <div className={s.platillo}>{platilloData.nombre} </div> 
      <div className={s.descripcion}>
        {platilloData.descripcion}
      </div>
      <input 
        name= "notas"
        value = {input.notas}
        placeholder="Notas"
        onChange={(e) => handleInputChange(e)}
      />
      {/* <Extras></Extras> */}
      <div className={s.cwrapper}>
        <button className={s.cboton} onClick={(e) =>handleSubtract(e)}> - </button>
        <div className={s.cboton} >{input.cantidad}</div>
        <button className={s.cboton} onClick={(e) =>handleAdd(e)}> +</button>
      </div>
      <button className={s.boton} onClick={(e) =>handleClick(e)}>
        <AddPedido precio = {input.precio} cantidad={input.cantidad}></AddPedido>
      </button>
    </div>   
  );
}
