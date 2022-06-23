import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import "./dish-details.css";
import AddPedido from "./AgregarCarrito/agregar";
import { addItem } from "../../Actions/actions";


export default function Dish_Details(props) {

  const restaurantId = useSelector((state) => state.loadedRestDetails.id);
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
    setInput({
      ...input,
      cantidad: qty + 1,
      precio: (qty + 1) * platilloData.precio
    });
  }
  const handleSubtract = function(e){
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
    <div className="ddwrapper">
      <img className="ddimg" src = {rutaImg} alt = {platilloData.nombre}></img> 
      <div className="ddplatillo">{platilloData.nombre} </div> 
      <div className="dd_descripcion"> {platilloData.descripcion} </div>
      <input className="dd_notas"
        name= "notas"
        value = {input.notas}
        placeholder="Notas"
        onChange={(e) => handleInputChange(e)}
      />
      <div className="dd_cwrapper">
        <button className="dd_cboton" onClick={(e) =>handleSubtract(e)}> - </button>
        <div className="dd_cboton" >{input.cantidad}</div>
        <button className="dd_cboton" onClick={(e) =>handleAdd(e)}> +</button>
      </div>
      <button className="dd_boton" onClick={(e) =>handleClick(e)}>
        <AddPedido precio = {input.precio} cantidad={input.cantidad}></AddPedido>
      </button>
    </div>   
  );
}
