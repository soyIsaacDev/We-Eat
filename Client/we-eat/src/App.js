import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import RestaurantCard from "./Components/RestaurantCard/restaurant-card";
import RestaurantDetails from "./Components/RestDetails/r-detail";
import DishDetails from "./Components/DishDetails/dish-details";
import Carrito from "./Components/CarritoCompras/carrito";
import LiveCoding from "./Components/GeolocationMap/MapLiveCoding";
import Geolocation from "./Components/GeolocationMap/Geolocation";
import AddRepartidor from "./Components/Repartidor/repartidor";
import AgregarRestaurant from "./Components/RestaurantCard/restaurantUpload";
import AgregarPlatillo from "./Components/Platillos/platilloUpload"
import AgregarDetallesRestaurant from "./Components/RestDetails/restDetailsUpload";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Routes>
          <Route exact path="/" element=
            { <RestaurantCard/> }
          />
          <Route path="/RestaurantDetails/:id" element=
            { <RestaurantDetails/>  }
          />
          <Route exact path="/DishDetail" element=
            { <DishDetails/>  }
          />
          <Route exact path="/Carrito" element=
            { <Carrito/>  }
          />
          <Route exact path="/LiveCoding" element=
            { <LiveCoding/>  }
          />
          <Route exact path="/Geolocation" element=
            { <Geolocation/>  }
          />
          <Route exact path="/addRepartidor" element=
            { <AddRepartidor/>  }
          />
          <Route exact path="/agregarRestaurant" element=
            { <AgregarRestaurant/>  }
          />
          <Route exact path="/agregarPlatillo" element=
            { <AgregarPlatillo/>  }
          />
          <Route exact path="/agregarDetallesRestaurant" element=
            { <AgregarDetallesRestaurant/>  }
          />
          
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
