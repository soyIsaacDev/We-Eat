// Post a Servidor

import { deleteCart, getPedidos } from "./actions";

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
      console.log("agregando Cliente "+ data)
      await fetch('http://localhost:4000/clientefinal/agregarclientes', requestOptions)
      };
      postData();       
}


export function setUser(user) {
    return { 
        type: "SET_USER",
        payload: user
    };
};

export function setLoginSession(data){
    return function (dispatch){
        const auth = {"username": data.username}
        console.log("Ejecutando setLoginSession L-51 --> "+ auth);
        //dispatch(setUser(auth));
        
        async function postData(){
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data),
          };     
          await fetch('http://localhost:4000/authcliente/logincliente/password', requestOptions)
          .then(response => response.json())
          .then(json => console.log(json))
        };    
        postData();
        dispatch(getLogginSession(data))
    }
}
export function getLoggin(session) {
    console.log("getLoggin APIMiddleware L-66 -->>  "+JSON.stringify(session))
    return { 
        type: "GET_LOGIN",
        payload: session
    };
};

export function getLogginSession(data){
    return function (dispatch){
        async function postData(){
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data),
          };     
          console.log("getLoginSession L-81"+JSON.stringify(data))
          await fetch('http://localhost:4000/authcliente/sesion', requestOptions)
            .then(response => response.json())
            .then(json => {
                console.log("Session Autenticada L-85 APIMiddleware"+JSON.stringify(json));
                dispatch(getLoggin(json));
            });
        };    
        postData();
    }
}


export function addPedido(data){
    return function (dispatch){
        console.log("Ejecutando addPedido L-98");
        
        async function postData(){
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data),
          };     
          await fetch('http://localhost:4000/pedidos/agregarpedido', requestOptions)
          .then(response => response.json())
          /* .then(json => console.log(json.status+json.id)) */
          .then(json => dispatch(getPedidos(json.id)))
          .then(json => dispatch(deleteCart()))
        };    
        postData();
    }
}