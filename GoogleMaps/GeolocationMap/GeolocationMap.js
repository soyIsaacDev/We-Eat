// Fallowing MasaKudamatsu guide  --> https://medium.com/100-days-in-kyoto-to-create-a-web-app-with-google/day-12-showing-user-location-on-embedded-google-maps-with-geolocation-api-and-react-a8ea40d1e891
// pages/index.js
import React, { useState } from "react";

import LocatorButton from './LocatorButton';
import Map from './Map';
import s from "./GeolocationMap.css";

function GeolocationMap() {
    /* Se usa una variable de estado para pasar mapObjet del mapa al LocatorButton
       Esto causa que se re-renderize la app completa; investigar como mejorar esto */
  const [mapObject, setMapObject] = useState(null);
  
  return (
    <>
      {/* Componente de boton que nos ayuda a conocer la ubiacion del usuario*/} 
      <LocatorButton mapObject={mapObject} />
      {/* Componente Map con Google Maps Embebido y seteado*/} 
      <Map className={s.map} setMapObject={setMapObject} />  
    </>
  );
}
export default GeolocationMap;