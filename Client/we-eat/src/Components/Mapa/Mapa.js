import React, { useEffect, useRef, useState } from "react";
import {Wrapper} from "@googlemaps/react-wrapper";

import Marker from "../GeolocationMap/Marker";

export default function Mapa() {
    const style = { height: "100vh"};
    const inputDiv = useRef(); 
    const positions = [
        {lat: 29.08, lng:-110.96},
        {lat: 29.08, lng:-111.012893},
        {lat: 29.10, lng:-110.942893}
    ];
    
    const [map, setMap] = useState(null);
    const [marker, setMarker] = useState(null);
    
    console.log(map);
    console.log(marker);
    function handleMap(){
        setMap(
            new window.google.maps.Map(inputDiv.current, {
                center : {lat: 29.08, lng:-110.96},
                zoom : 12
            })
        )
        
    }
    function addMarker(mapa, loc){
        setMarker(
            new window.google.maps.Marker({
                position: loc,
                map:mapa,
                title: "Aqui estoy mundo!",
              })
        )
    }
    useEffect(() => {
      setTimeout(() => {
          handleMap();
      }, 300);
    }, [])

    useEffect(() => {
        console.log("Mapa -->>" + map)
        const loc = {lat: 29.08, lng:-111.012893};
        setTimeout(() => {
            addMarker(map, loc);
        }, 300);
      }, [map])
    
    return (
        <Wrapper apiKey={"AIzaSyAqzcacI8T6cuYGOzIb8dvQUBpKw1HHhEs"}> 
            {map? <div></div> : <div>Loading</div>} 
            <div ref={inputDiv} style = {style} id="map">  
            </div>
        </Wrapper>
      
    );
}