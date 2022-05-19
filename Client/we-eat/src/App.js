import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import LogInButtons from "./Components/Login/LogInButtons"; 
import Restaurantes from "./Components/RestaurantCard/restaurantes";
import RestaurantDetails from "./Components/RestDetails/r-detail";
import DishDetails from "./Components/DishDetails/dish-details";
import Carrito from "./Components/CarritoCompras/carrito";
import LiveCoding from "./Components/GeolocationMap/MapLiveCoding";
import Geolocation from "./Components/GeolocationMap/Geolocation";
import AddRepartidor from "./Components/Repartidor/repartidor";

import AgregarPlatillo from "./Components/Platillos/platilloUpload"
import AgregarDetallesRestaurant from "./Components/RestDetails/restDetailsUpload";
import AgregarClienteFinal from "./Components/Clientes/AgregarClienteFinal";
import AgregarClienteRestaurant from "./Components/Clientes/agregarClienteRestaurant";
import ProtectedRoutes from "./ProtectedRoutes";
import LoggedIn from "./Components/Login/Loggedin";
import Map from "./Components/GeolocationMap/Map";
import Marker from "./Components/GeolocationMap/Marker";
import Signin from "./Components/Login/SignIn"
import NavBar from "./Components/NavBar/NavBar";     
import NavBarRestaurantero from "./Components/NavBar/NavBarRestaurantero";
import HomeRestaurantero from "./Components/HomeRestaurante/HomeRestaurantero";
//import SignInRest from "./Components/Login/SignInRest"

function App() { 

  return (
    <div className="App">
        <React.Fragment>
          <Routes>
            <Route path="/" element={<Signin />} />
            {/* <Route path="/signinrest" element={<SignInRest />} /> */}
            <Route exact path="/AgregarClienteFinal" element = { <AgregarClienteFinal/> } />
            <Route exact path="/AgregarClienteRestaurant" element = { <AgregarClienteRestaurant/> } />
            <Route path="/signin" element={<LogInButtons />} />
            <Route path="/NavBar" element={<NavBar/>} />
            <Route path="/NavBarRestaurantero" element={<NavBarRestaurantero/>} />
            
            <Route element={<ProtectedRoutes />}>

                <Route exact path="/Restaurantes" element = { <Restaurantes/> } />
                <Route path="/RestaurantDetails/:id" element = { <RestaurantDetails/> } />
                <Route exact path="/DishDetail" element={ <DishDetails/> } />
                <Route exact path="/Carrito" element = { <Carrito/> } />
                <Route exact path="/LiveCoding" element = { <LiveCoding/> } />
                <Route exact path="/Geolocation" element = { <Geolocation/> } />
                <Route exact path="/addRepartidor" element = { <AddRepartidor/> } />
                
                <Route exact path="/agregarPlatillo" element = { <AgregarPlatillo/> } />
                <Route exact path="/agregarDetallesRestaurant" element = { <AgregarDetallesRestaurant/> } />
                
                <Route exact path="/map" element = { <Map/> } />
                <Route exact path="/marker" element = { <Marker/> } />
                {/* <Route exact path="/Perfil" element = { <LoginHome/> } /> */}

                <Route exact path="/homerestaurantero" element = { <HomeRestaurantero/> } />

            </Route>
        </Routes>
        </React.Fragment>
    </div>
  );
}

export default App;
