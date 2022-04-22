//REDUCER
const initialState = {
    googleMap: {},
    geolocation:[],
    loadedRestaurants:[],
    loadedRestDetails:[],
    loadedImg:[],
    loadedMenu:[]
  }

  // getPlumber, getPlumberDetail

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

      default:
        return {...state}
    }
  };

  export default rootReducer;