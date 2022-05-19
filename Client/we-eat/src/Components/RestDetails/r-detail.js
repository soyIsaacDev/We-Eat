import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector  } from "react-redux";

import { getPlatillos, getRestaurantDetails } from "../../Actions/actions";
import s from "./r-details.module.css";
import DishCard from "../DishCard/dishCard";
import star from "./media//star.png";
import food from "./media//food-tray-a.png";
import busqueda from "./media/lupa-a.png";

export default function RestaurantDetails() {
    const restaurante = useSelector((state) => state.loadedRestDetails);
    
    const dispatch = useDispatch();
    const restaurantId = useParams().id;
    console.log(restaurantId);
    
    useEffect(() => { 
        dispatch(getRestaurantDetails(restaurantId));
        dispatch(getPlatillos(restaurantId));
    }, []);

    const platillos = useSelector((state)=> state.loadedPlatillos);
    if(restaurante){
        const rutaImgRest = "http://localhost:4000/restaurantes/uploads/"+ restaurante.ImgRest.name;
        return(
            <div className={s.wrapper}>
                <img className={s.img} src={rutaImgRest} alt="Banner de Restaurant"></img>
                <div className={s.infoWrapper}>
                    <div className={s.restname}>{restaurante.nombre}</div>
                    <div className={s.datos}>
                        <img  className={s.icon} src={star} alt="Estrella Calificacion"></img>
                        <div className={s.calificacion}>4.6 (70 calificaciones)</div>
                        <div className={s.tiempoComida}>{restaurante.tipoComida}</div>
                        <div className={s.precio}>$$$$</div>
                        <img  className={s.icon} src={food} alt="Envio Comida"></img>
                    </div>
                    <div className={s.envio}>
                        <div className={s.tiempo}>15-25min</div>
                        <div className={s.costo}>Costo de envio: ${restaurante.costoEnvio}</div>
                    </div>
                    <div className={s.envio}>Toca para ver los horarios, dirrección y mas</div>
                    <div className={s.menuWraper}>
                        <div className={s.menu}>Menú</div>
                        <img  className={s.busqueda} src={busqueda} alt="Busqueda"></img>
                    </div>
                    <div className={s.seleccion}>Seleccionado para ti</div>
                    {platillos.map((platillo)=>{
                        const rutaImg = "http://localhost:4000/restaurantes/uploads/"+ platillo.ImgPlatillo.name;
                        return(
                            <Link to = "/DishDetail">
                                <DishCard nombrePlatillo = {platillo.nombre} descripcion = {platillo.descripcion}
                                precio = {platillo.precio} imagen = {rutaImg}
                                ></DishCard>
                            </Link>
                        );
                    })}
                    
                </div>          
            </div>
        )
    } else {
        return("Loading")
    }
    
}
