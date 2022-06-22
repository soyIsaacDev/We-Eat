import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { getRestaurants } from "../../Actions/actions";
import NavBar from "../NavBar/NavBar";
//import s from "./restaurantes.module.css";
import "./restaurantes.css";



export default function Restaurantes() {
  

  const restaurants = useSelector((state) => state.loadedRestaurants);
  
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurants());
  }, []);
  
  return (
    <div className="all">
      <h1 className="title">Bienvenido a We-Eat</h1>
      <NavBar></NavBar>
      {restaurants.map((restaurant) => {
        const rutaImg = "http://localhost:4000/restaurantes/uploads/"+ restaurant.ImgRest.name;
        
          return (
            <Link to={`/restaurantDetails/${restaurant.id}`}>
              <div  key = {restaurant.id} className="restcardwrap">
                <img className="img" src={rutaImg} alt="Imagen Restaurant" />
                <div key = {`${restaurant.nombre}nrap`} className="rnamewrap">
                  <div key = {`${restaurant.nombre}nombre`} className="rname">{restaurant.nombre}</div>
                  <div key = {`${restaurant.nombre}calif`} className="calif">4.6</div>
                </div>
                <div key = {`${restaurant.nombre}enviowap`} className="enviowrap">
                  <div key ={`${restaurant.nombre}cenvio`}  className="cenvio">Costo de envio:</div>
                  <div key = {restaurant.costoEnvio}  className="penvio">MX ${restaurant.costoEnvio}</div>
                  <div key = {`${restaurant.nombre}tenvio`} className="tenvio">35-45 min</div>
                </div>
              </div>
            </Link> 
          )
               
      })}
    </div>
    
  );
}
