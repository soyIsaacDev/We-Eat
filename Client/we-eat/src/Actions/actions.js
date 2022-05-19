// ACTIONS

export function addMap(payload) {
    return { 
        type: "ADD_MAP", 
        payload 
    };
};

export function addGeolocation(payload) {
    return { 
        type: "ADD_GEOLOCATION", 
        payload 
    };
};

export function getRestaurants(){
    return function (dispatch){
       return fetch("http://localhost:4000/restaurantes/restaurantes")
           .then(response => response.json())
           .then(json => {
               console.log(json)
               dispatch({
                   type: "GET_RESTAURANTES",
                   payload: json
               }); 
           });
    };
}

export function getRestaurantDetails(id){
    return function (dispatch){
       return fetch(`http://localhost:4000/restaurantes/restaurantes/${id}`)
           .then(response => response.json())
           .then(json => {
               console.log(json)
               dispatch({
                   type: "GET_RESTAURANTE_DETAILS",
                   payload: json
               }); 
           });
    };
}

export function getPlatillos(){
    return function (dispatch){
       return fetch(`http://localhost:4000/restaurantes/platillos`)
           .then(response => response.json())
           .then(json => {
               console.log(json)
               dispatch({
                   type: "GET_PLATILLOS",
                   payload: json
               }); 
           });
    };
}

export function getImg(){
    return function (dispatch){
       return fetch("http://localhost:4000/restaurantes/imagenes")
           .then(response => response.json())
           .then(json => {
               console.log(json)
               dispatch({
                   type: "GET_IMAGENES",
                   payload: json
               }); 
           });
    };
}

export function getMenu(){
    return function (dispatch){
       return fetch("http://localhost:4000/restaurantes/menu")
           .then(response => response.json())
           .then(json => {
               console.log(json)
               dispatch({
                   type: "GET_MENU",
                   payload: json
               }); 
           });
    };
}

export function getUser(){
    return function (dispatch){
       return fetch("http://localhost:4000/auth/profile")
           .then(response => response.json())
           .then(json => {
               console.log(json)
               dispatch({
                   type: "GET_MENU",
                   payload: json
               }); 
           });
    };
}

export function loginEstado() {
    return { 
        type: "SET_LOGIN"
    };
};

export function getLoginSession(){
    return function (dispatch){
        console.log("getLoginSession")
       return fetch("http://localhost:4000/sesion?username=ewatt")
           .then(response => response.json())
           .then(json => {
               console.log("Respuesta Session -->>>"+JSON.stringify(json))
               dispatch({
                   type: "GET_LOGIN",
                   payload: json
               }); 
           });
    };
}

export function getCorporativo(){
    return function (dispatch){
       return fetch("http://localhost:4000/restaurantes/corporativo")
           .then(response => response.json())
           .then(json => {
               console.log(json)
               dispatch({
                   type: "GET_CORPORATIVO",
                   payload: json
               }); 
           });
    };
}

