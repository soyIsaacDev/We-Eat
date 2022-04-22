import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import style from "./restaurant-card.module.css";
import { getRestaurants } from "../../Actions/actions";

export default function Restaurant_Card() {
  const restaurants = useSelector((state) => state.loadedRestaurants);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurants());
  }, []);
  
  return (
    <div>
      {restaurants.map((restaurant) => {
        const rutaImg = "http://localhost:4000/uploads/"+ restaurant.ImgRest.name;
        
          return (
            <Link to={`/restaurantDetails/${restaurant.id}`}>
              <div  key = {restaurant.id} className={style.restcardwrap}>
                <img className={style.img} src={rutaImg} alt="Imagen Restaurant" />
                <div key = {`${restaurant.nombre}nrap`} className={style.rnamewrap}>
                    <div key = {restaurant.nombre} className={style.rname}>{restaurant.nombre}</div>
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
