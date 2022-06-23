import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector  } from "react-redux";

import { getPlatillos, getRestaurantDetails } from "../../Actions/actions";
import DishCard from "../DishCard/dishCard";

import "./r-details.css";
import star from "./media//star.png";
import food from "./media//food-tray-a.png";
import busqueda from "./media/lupa-a.png";

export default function RestaurantDetails() {
    const restaurante = useSelector((state) => state.loadedRestDetails);
    const carrito = useSelector((state)=>state.carrito)
    
    const dispatch = useDispatch();
    const restaurantId = useParams().id;
    console.log(restaurantId);
    
    useEffect(() => { 
        dispatch(getRestaurantDetails(restaurantId));
        dispatch(getPlatillos(restaurantId));
    }, []);

    const platillos = useSelector((state)=> state.loadedPlatillos);

    if(Object.keys(restaurante).length>0){
        const rutaImgRest = "http://localhost:4000/restaurantes/uploads/"+ restaurante.ImgRest.name;
        
        return(
            <div className="wrapper">
                <img className="img" src={rutaImgRest} alt="Banner de Restaurant"></img>
                <div className="infoWrapper">
                    <div className="restname">{restaurante.nombre}</div>
                    <div className="datos">
                        <img  className="icon" src={star} alt="Estrella Calificacion"></img>
                        <div className="calificacion">4.6 (70 calificaciones)</div>
                        <div className="tiempoComida">{restaurante.tipoComida}</div>
                        <div className="precio_icon">$$$$</div>
                        <img  className="icon" src={food} alt="Envio Comida"></img>
                    </div>
                    <div className="envio">
                        <div className="tiempo">15-25min</div>
                        <div className="costo">Costo de envio: ${restaurante.costoEnvio}</div>
                    </div>
                    <div className="envio">Toca para ver los horarios, dirrección y mas</div>
                    <div className="menuWraper">
                        <div className="menu">Menú</div>
                        <img  className="busqueda" src={busqueda} alt="Busqueda"></img>
                    </div>
                    <div className="seleccion">Seleccionado para ti</div>
                    {platillos.map((platillo)=>{
                        const rutaImg = "http://localhost:4000/restaurantes/uploads/"+ platillo.ImgPlatillo.name;
                        return(
                            <Link to = {`/DishDetail/${platillo.id}`} className="rdlink">
                                <DishCard nombrePlatillo = {platillo.nombre} descripcion = {platillo.descripcion}
                                precio = {platillo.precio} imagen = {rutaImg} id = {platillo.id}
                                ></DishCard>
                            </Link>
                        );
                    })}
                    
                    {carrito.length>0? 
                        <Link to = {"/carrito"}> 
                            <div className="vercarrito">Ver carrito ({carrito.length})</div> 
                        </Link> 
                        : 
                        <div></div>
                    }
                    
                </div>          
            </div>
        )
    } else {
        return("Loading")
    }
    
}
