import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { Login} from "./Actions/actions";

import LogInButtons from "./Components/Login/LogInButtons"; 
import Restaurantes from "./Components/RestaurantCard/restaurantes";
import RestaurantDetails from "./Components/RestDetails/r-detail";
import DishDetails from "./Components/DishDetails/dish-details";
import Carrito from "./Components/CarritoCompras/carrito";
import LiveCoding from "./Components/GeolocationMap/MapLiveCoding";
import Geolocation from "./Components/GeolocationMap/Geolocation";
import AddRepartidor from "./Components/Repartidor/repartidor";
import AgregarRestaurant from "./Components/RestaurantCard/restaurantUpload";
import AgregarPlatillo from "./Components/Platillos/platilloUpload"
import AgregarDetallesRestaurant from "./Components/RestDetails/restDetailsUpload";
import AgregarClientes from "./Components/Clientes/agregarClientes";
import ProtectedRoutes from "./ProtectedRoutes";
import LoggedIn from "./Components/Login/Loggedin";
import Map from "./Components/GeolocationMap/Map";
import Marker from "./Components/GeolocationMap/Marker";
import Signin from "./Components/Login/SignIn"

// Context provides a way to pass data through the component tree without having to 
// pass props down manually at every level.
// Context is designed to share data that can be considered “global” for a tree of React
//export const UserContext = createContext();
  // createContext -> Creates a Context object. When React renders a component that 
  // subscribes to this Context object it will read the current context value from the
  // closest matching Provider above it in the tree.        

function App() {
 /*  const loginState = useState(false);
  const dispatch = useDispatch();
    dispatch(Login(loginState)); */

  /* const [user, setUser] = useState({ loggedIn: false }); */
 

  return (
    <div className="App">
      {/*   The Provider component accepts a value prop to be passed 
            to consuming components that are descendants of this Provider.  
            All consumers that are descendants of a Provider will re-render 
            whenever the Provider’s value prop changes.    */}
      {/* <UserContext.Provider value={{ user, setUser }}>  */}{/* Passing "user" & "setUser" values through Context so components  */}
        {/* <LogInButtons></LogInButtons>  */}          {/* have access to it without using props (passes directly to LogInButtons) */}

        <React.Fragment>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route exact path="/agregarClientes" element = { <AgregarClientes/> } />
            <Route path="/signin" element={<LogInButtons />} />
            <Route element={<ProtectedRoutes />}>

                <Route exact path="/Restaurantes" element = { <Restaurantes/> } />
                <Route path="/RestaurantDetails/:id" element = { <RestaurantDetails/> } />
                <Route exact path="/DishDetail" element={ <DishDetails/> } />
                <Route exact path="/Carrito" element = { <Carrito/> } />
                <Route exact path="/LiveCoding" element = { <LiveCoding/> } />
                <Route exact path="/Geolocation" element = { <Geolocation/> } />
                <Route exact path="/addRepartidor" element = { <AddRepartidor/> } />
                <Route exact path="/agregarRestaurant" element = { <AgregarRestaurant/> } />
                <Route exact path="/agregarPlatillo" element = { <AgregarPlatillo/> } />
                <Route exact path="/agregarDetallesRestaurant" element = { <AgregarDetallesRestaurant/> } />
                
                <Route exact path="/map" element = { <Map/> } />
                <Route exact path="/marker" element = { <Marker/> } />
                {/* <Route exact path="/Perfil" element = { <LoginHome/> } /> */}

            </Route>
        </Routes>
        </React.Fragment>
        
      {/* </UserContext.Provider> */}
    </div>
  );
}

export default App;
