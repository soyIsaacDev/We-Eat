
//REDUCER
const initialState = {
    
    googleMap: {},
    geolocation:[],
    loadedRestaurants:[],
    loadedRestDetails:[],
    loadedPlatillos: [],
    loadedImg:[],
    loadedMenu:[],
    loginState:"",
    user: [],
    corporativo: [],
    carrito: []
  }

  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_MAP':
        return {
          ...state,
          googleMap: action.payload
        }
      case 'ADD_GEOLOCATION':
        return {
          ...state,
          geolocation: action.payload
        }
      case 'GET_RESTAURANTES':
        return{
          ...state,
          loadedRestaurants: action.payload
        }
      case 'GET_RESTAURANTE_DETAILS':
        return{
          ...state,
          loadedRestDetails: action.payload
        }  
      case 'GET_IMAGENES':
        return{
          ...state,
          loadedImg: action.payload
        }
      case 'GET_MENU':
        return{
          ...state,
          loadedMenu: action.payload
        }
      case 'GET_LOGIN':
        return{
          ...state,
          loginState: action.payload
        }
      
      case 'SET_USER':
        return{
          ...state,
          user: action.payload
        }
      case 'GET_CORPORATIVO':
        return{
          ...state,
          corporativo: action.payload
        }
      case 'GET_PLATILLOS':
        return{
          ...state,
          loadedPlatillos: action.payload
        } 
      case 'ADD_ITEM':
        state.carrito.push(action.payload)
        return{
          ...state,
          carrito: state.carrito
        }
      case 'DELETE_CART':
        return{
          ...state,
          carrito: []
        } 
      default:
        return {...state}
    }
  };

  export default rootReducer;