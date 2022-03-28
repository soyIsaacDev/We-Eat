 import React, { useEffect, useRef, useState } from "react";
 import { useDispatch } from "react-redux";
 import {addMap} from "../../Actions/actions.js";
/*
export default function Map({center, zoom, children}){
    // const inputDiv = useRef(); 
    const style = {height: "100vh"};
    
    const inputDiv = useRef(HTMLDivElement);
    
    useEffect(() => {
      new window.google.maps.Map(inputDiv.current, {
        //center,
        //zoom,
      })
    });
        // IMPORTANTE: siempre se debe definir el height cuando usamos Google Maps
    return (
      <div ref={inputDiv} style = {style} id="map">
        {children}
      </div>
    )
    
} */

// ESTO DEBERIA FUNCIONAR

/* export default function Map({center, zoom, children}){
  const style = {height: "100vh"};
  const inputDiv = useRef(HTMLDivElement); 
  const mapa = window.google.maps.Map(inputDiv.current, {
    //center,
    //zoom,
  }); 
  const [map, setMap] = useState(null); // didn´t set an ititial state as in video
  const [count, setCount] = useState(0);
  
  
  useEffect(() => {
    console.log(inputDiv.current);
    setMap(
      new window.google.maps.Map(inputDiv.current, {
        //center,
        //zoom,
      },[])
    );
  });
  if (map){
    map.setCenter(center.center); // porperties of .Map class
    map.setZoom(zoom.zoom);
  }
  
      // IMPORTANTE: siempre se debe definir el height cuando usamos Google Maps
  return (
  <div ref={inputDiv} style = {style} id="map">
    
    <button onClick={() => 
      setMap(
          new window.google.maps.Map(inputDiv.current, {
          //center,
          //zoom,
          },[])
      )}>
    </button>
  </div>)
} */

export default function Map(properties) {
  const dispatch = useDispatch();
  const style = { height: "90vh"};
  const inputDiv = useRef(); 
  const [map, setMap] = useState(null);

  function handleClick(){
    setMap(
      new window.google.maps.Map(inputDiv.current, {
        //center,
        //zoom,
      })
    )
    
  }
  if (map){
    map.setCenter(properties.center); // porperties of .Map class
    map.setZoom(properties.zoom);
    dispatch(addMap(map));
  }
  return (
    <div>
    <p></p>
    <button onClick={() => handleClick()}>
      Mapa
    </button>
    <div ref={inputDiv} style = {style} id="map">
    </div>
    </div>
  );
}