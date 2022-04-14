//REDUCER
const initialState = {
    googleMap: {},
    geolocation:[],
    loadedRestaurants:[],
    loadedImg:[]
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
      case 'GET_IMAGENES':
        return{
          ...state,
          loadedImg: action.payload
        }

      default:
        return {...state}
    }
  };

  export default rootReducer;