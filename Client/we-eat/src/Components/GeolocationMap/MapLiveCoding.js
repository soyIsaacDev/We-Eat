import React from "react";
import { useSelector } from "react-redux";
import {Wrapper} from "@googlemaps/react-wrapper";

import Map from "./Map";
import Marker from "./Marker";
import Geolocation from "./Geolocation";

export default function App(){
    const center = {lat: 29.08, lng:-110.96};
    const zoom = 12;
    const location = useSelector((state) => state.geolocation);
    const positions = [
        {lat: 29.08, lng:-110.96},
        {lat: 29.08, lng:-111.012893},
        {lat: 29.10, lng:-110.942893}, 
        location
    ];
    console.log(positions)
    
    return (
        <Wrapper apiKey={"AIzaSyAqzcacI8T6cuYGOzIb8dvQUBpKw1HHhEs"}>
            <Map center ={center} zoom ={zoom}>
            </Map>
            <Marker positions = {positions}/>
            <Geolocation></Geolocation>
            {/*<Marker position = {center} />
            <Marker position = {pr} />
            <Marker position= {posicion}/> */}
        </Wrapper>
    )
}