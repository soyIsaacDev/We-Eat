//REDUCER
const initialState = {
    googleMap: {},
    geolocation:[]
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

      default:
        return {...state}
    }
  };

  export default rootReducer;