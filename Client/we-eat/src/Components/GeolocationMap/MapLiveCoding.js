import React from "react";
import {Wrapper} from "@googlemaps/react-wrapper";

import Map from "./Map";
import Marker from "./Marker";

export default function App(){
    const center = {lat: 29.08, lng:-110.96};
    const zoom = 12;
    const pr = {lat: 29.08, lng:-111.012893};
    const posicion = {lat: 29.10, lng:-110.942893};
    
    return (
        <Wrapper apiKey={"AIzaSyAqzcacI8T6cuYGOzIb8dvQUBpKw1HHhEs"}>
            <Map center ={center} zoom ={zoom}>
            </Map>
            <Marker center = {center}/>
            <Marker center = {pr}/>
            <Marker center = {posicion}/>
            
            
                
        </Wrapper>
    )
}