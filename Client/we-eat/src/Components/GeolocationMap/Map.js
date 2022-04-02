 import React, { useEffect, useRef, useState } from "react";
 import { useDispatch } from "react-redux";
 import {addMap} from "../../Actions/actions.js";

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