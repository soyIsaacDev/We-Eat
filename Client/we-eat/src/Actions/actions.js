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


/* export function nuevoRepartidor(){
    return function (dispatch){
       return fetch.post("localhost:4000/repartidor/nuevoRepartidor",
       {
           method: "POST",
           body: payload
        })
           .then(response => response.json())
           .then(json => {
               console.log(json)
               dispatch({
                   type: "GET_CREADO_POR_API",
                   payload: json
               }); 
           }); 
    };
} */

export function addRestaurant(data){
    async function postData(){
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
      };
      await fetch('http://localhost:4000/restaurantes/agregarRestaurantes', requestOptions)
      };
      postData();       
}