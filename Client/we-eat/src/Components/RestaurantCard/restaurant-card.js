import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";


//import imagen from "./Quiriego-chico.jpg";
import style from "./restaurant-card.module.css";
import { getRestaurants, getImg } from "../../Actions/actions";



export default function Restaurant_Card() {

  const restaurants = useSelector((state) => state.loadedRestaurants);
  //const imagen = useSelector((state) => state.loadedImg);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurants());
    dispatch(getImg());
  }, []);
  
  return (
    <Link to={`/RestaurantDetails`}>
      {restaurants.map((restaurant) => {
        
        const rutaImg = "http://localhost:4000/uploads/"+ restaurant.ImgRest.name;
        console.log(rutaImg)
        return (
          <div  key = "restcard" className={style.restcardwrap}>
            <img className={style.img} src={rutaImg} alt="Imagen Restaurant" />
            <div key = "rnamewrap" className={style.rnamewrap}>
                <div key = "rname" className={style.rname}>{restaurant.nombre}</div>
                <div key = "calif" className={style.calif}>4.6</div>
            </div>
            <div key = "enviowrap" className={style.enviowrap}>
              <div key = "cenvio"  className={style.cenvio}>Costo de envio:</div>
              <div key = "penvio"  className={style.penvio}>$9</div>
              <div key = "tenvio"  className={style.tenvio}>35-45 min</div>
            </div>
          </div>
        )
      })}
    </Link>
    
  );
}
