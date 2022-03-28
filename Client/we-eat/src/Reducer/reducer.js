//REDUCER
const initialState = {
    googleMap: {}
  }

  // getPlumber, getPlumberDetail

  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_MAP':
        return {
          ...state,
          googleMap: action.payload
        }

      default:
        return {...state}
    }
  };

  export default rootReducer;