import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { getRestaurants } from "../../Actions/actions";
import NavBar from "../NavBar/NavBar";
import style from "./restaurantes";

export default function Restaurantes() {
  const restaurants = useSelector((state) => state.loadedRestaurants);
  
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurants());
  }, []);
  
  return (
    <div>
      <h1>Bienvenido a We-Eat</h1>
      <NavBar></NavBar>
      {restaurants.map((restaurant) => {
        const rutaImg = "http://localhost:4000/restaurantes/uploads/"+ restaurant.ImgRest.name;
        
          return (
            <Link to={`/restaurantDetails/${restaurant.id}`}>
              <div  key = {restaurant.id} className={style.restcardwrap}>
                <img className={style.img} src={rutaImg} alt="Imagen Restaurant" />
                <div key = {`${restaurant.nombre}nrap`} className={style.rnamewrap}>
                    <div key = {`${restaurant.nombre}nombre`} className={style.rname}>{restaurant.nombre}</div>
                    <div key = {`${restaurant.nombre}calif`} className={style.calif}>4.6</div>
                </div>
                <div key = {`${restaurant.nombre}enviowap`} className={style.enviowrap}>
                  <div key ={`${restaurant.nombre}cenvio`}  className={style.cenvio}>Costo de envio:</div>
                  <div key = {restaurant.costoEnvio}  className={style.penvio}>${restaurant.costoEnvio}</div>
                  <div key = {`${restaurant.nombre}tenvio`} className={style.tenvio}>35-45 min</div>
                </div>
              </div>
            </Link> 
          )
               
      })}
    </div>
    
  );
}
