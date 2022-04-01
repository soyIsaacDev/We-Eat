import React, { Component } from "react";
import { useDispatch } from "react-redux";

// Importing geolocated reducer function
//import { geolocated } from "react-geolocated";
import { addGeolocation } from "../../Actions/actions";

export default function Geolocation (){
	const dispatch = useDispatch();
  /*   navigator.geolocation? 
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                }
            }
        ): alert("Sin Localizacion activada") */
    
    if(navigator.geolocation){
        
        navigator.geolocation.watchPosition(
            (position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                }
                console.log(pos)
                dispatch(addGeolocation(pos));
            }
        )
        return <div> Localizacion</div>
        
    } else{
		alert("Favor de activar la Localizacion")
        /* return(<div>
            Favor de activar la Localizacion
        </div>) */
    }

}


class App extends Component {
render() {

	// Check geolocation supported in
	// browser or not
	return this.props.isGeolocationAvailable ? (

	// Check location is enable in
	// browser or not
	this.props.isGeolocationEnabled ? (

		// Check coordinates of current
		// location is available or not
        

		this.props.coords ? (
		<div>
			<h3 style={{ color: "red" }}>
			Current latitude and longitude of the user is
			</h3>
			<ul>
			<li>latitude - {this.props.coords.latitude}</li>
			<li>longitude - {this.props.coords.longitude}</li>
			</ul>
		</div>
		) : (
		<h1>Getting the location data</h1>
		)
	) : (
		<h1>Please enable location on your browser</h1>
	)
	) : (
	<h1>Please, update your or change the browser </h1>
	);
}
}

// Binding geolocated() reducer function to
// App component, while exporting it
//export default geolocated()(App);
