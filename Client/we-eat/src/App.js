import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Restaurantes from "./Components/RestaurantCard/restaurantes";
import RestaurantDetails from "./Components/RestDetails/r-detail";
import DishDetails from "./Components/DishDetails/dish-details";
import Carrito from "./Components/CarritoCompras/carrito";
import LiveCoding from "./Components/GeolocationMap/MapLiveCoding";
import Geolocation from "./Components/GeolocationMap/Geolocation";
import AddRepartidor from "./Components/Repartidor/repartidor";
import AgregarClienteFinal from "./Components/Clientes/AgregarClienteFinal";
import ProtectedRoutes from "./ProtectedRoutes";
import Map from "./Components/GeolocationMap/Map";
import Marker from "./Components/GeolocationMap/Marker";
import Signin from "./Components/Login/SignIn"
import NavBar from "./Components/NavBar/NavBar";     

function App() { 

  return (
    <div className="App">
        <React.Fragment>
          <Routes>
            <Route path="/" element={<Signin />} />
            {/* <Route path="/signinrest" element={<SignInRest />} /> */}
            <Route exact path="/AgregarClientes" element = { <AgregarClienteFinal/> } />
            <Route path="/NavBar" element={<NavBar/>} />
            
            <Route element={<ProtectedRoutes />}>
                <Route exact path="/Restaurantes" element = { <Restaurantes/> } />
                <Route path="/RestaurantDetails/:id" element = { <RestaurantDetails/> } />
                <Route exact path="/DishDetail/:id" element={ <DishDetails/> } />
                <Route exact path="/Carrito" element = { <Carrito/> } />
                <Route exact path="/LiveCoding" element = { <LiveCoding/> } />
                <Route exact path="/Geolocation" element = { <Geolocation/> } />
                <Route exact path="/addRepartidor" element = { <AddRepartidor/> } />
                <Route exact path="/map" element = { <Map/> } />
                <Route exact path="/marker" element = { <Marker/> } />
                {/* <Route exact path="/Perfil" element = { <LoginHome/> } /> */}
            </Route>
        </Routes>
        </React.Fragment>
    </div>
  );
}

export default App;
