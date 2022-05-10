// Post a Servidor

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

/* export function addRestaurantImg(data){
    async function postData(){
        const requestOptions = {
          method: 'POST',
          body: data
      };
      await fetch('http://localhost:4000/restaurantes/agregarImgRest', requestOptions)
      };
      postData();       
} */

export function addRepartidor(data){
    async function postData(){
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
      };
      await fetch('http://localhost:4000/repartidor/nuevoRepartidor', requestOptions)
      };
      postData();       
}

export function addUbicacionRepartidor(data){
    async function postUbicacion(){
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
      };
      await fetch('http://localhost:4000/repartidor/ubicacionRepartidor', requestOptions)
      };
      postUbicacion();       
}

export function addClientes(data){
    async function postData(){
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
      };
      await fetch('http://localhost:4000/clientefinal/agregarclientes', requestOptions)
      };
      postData();       
}

export function addClienteRestaurant(data){
    async function postData(){
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
      };
      console.log(data)
      await fetch('http://localhost:4000/ClienteRestaurantero/agregarclienterestaurantero', requestOptions)
      };
      postData();       
}

export function setUser(user) {
    return { 
        type: "SET_USER",
        payload: user
    };
};



export function loginSession(data){
    return function (dispatch){
        dispatch(setUser(data));
        
        async function postData(){
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data),
          };     
          await fetch('http://localhost:4000/login/password', requestOptions)
            .then(response => response.json())
            .then(json => {
                console.log("Usuario regresado por sesion ->>"+json)                
            });
        };    
        postData();
    }
}
export function getLogginSession(session) {
    return { 
        type: "GET_LOGIN",
        payload: session
    };
};
export function postLoginSession(data){
    return function (dispatch){
        async function postData(){
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data),
          };     
          await fetch('http://localhost:4000/sesion', requestOptions)
            .then(response => response.json())
            .then(json => {
                console.log("Session Autenticada"+json);
                dispatch(getLogginSession(json));
            });
        };    
        postData();
    }
}

/*export function loginSession(data){
    async function postData(){
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
      };     
      await fetch('http://localhost:4000/login/password', requestOptions)
        .then(response => response.json())
        .then(json => {
            console.log("Usuario regresado por sesion ->>"+json)
            
            
             Escribir respuesta en DB y consultarlo en ProtectedRoutes
            
        });
        
      };
      postData();       
}*/
