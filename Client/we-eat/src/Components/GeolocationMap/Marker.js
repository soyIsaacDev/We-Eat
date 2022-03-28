import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";

export default function Marker(properties) {
  const map = useSelector((state) => state.googleMap);
  
  const style = {height: "90vh"};
  const inputDiv = useRef(); 
  const [marker, setMarker] = useState(null);
  var position = properties.center;

  function handleClick(){
    setMarker(
      new window.google.maps.Marker({
      })
    )
  }
 
  if(marker){
    marker.setMap(map);
    marker.setPosition(position);
  }

  // Solo Renderiza un marker
  // Tal vez tenga que mandar las posiciones a Store y mapear las posiciones
  
  return (
    <div>
    <p></p>
    
    <button onClick={() => handleClick()
      
    }>
      Marcador
    </button>
    <div ref={inputDiv} style = {style} id="map">
    </div>
    </div>
  );
}

/* export default function Marker(properties) {
  const style = {height: "90vh"};
  const inputDiv = useRef(); 
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  var position = {lat: 29.08, lng:-110.96};

  if (map){
    map.setCenter(properties.center); // porperties of .Map class
    map.setZoom(properties.zoom);
  }
  if(marker){
    console.log("hay un puto marker")
    console.log(map);
    marker.setMap(map);
    marker.setPosition(position);
  }

  return (
    <div>
    <p></p>
    <button onClick={() => 
      setMap(
        new window.google.maps.Map(inputDiv.current, {
          //center,
          //zoom,
        },[])
      )
    }>
      Click me
    </button>
    <button onClick={() => 
      setMarker(
        new window.google.maps.Marker({
          //center,
          //zoom,
        },[])
      )
    }>
      Click me
    </button>
    <div ref={inputDiv} style = {style} id="map">
    </div>
    </div>
  );
} */

