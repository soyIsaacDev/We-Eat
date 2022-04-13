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