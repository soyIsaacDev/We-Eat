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


