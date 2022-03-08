const LOAD_BUSINESS = 'business/loadBusiness'

// const getOne = business => ({
//     type: GET_ONE,
//     business,
// })

export const loadBusiness = (businesses) => {
  return { 
    type: LOAD_BUSINESS, 
    businesses
  }
}

//GET request thunk
export const fetchBusinesses = () => async dispatch => {
  const res = await fetch('/api/businesses')
  console.log('RES', res)
  const businesses = await res.json()
  console.log('BUSINESS??', businesses)
  dispatch(loadBusiness(businesses))
  return loadBusiness
}


const initialState = { entries: [], isLoading: true }

const businessReducer = (state = initialState, action) => {
  let newState;
  let newEntries;
    switch(action.type) {
        case LOAD_BUSINESS:
          // return {
          //   ...state,
          //   entries: [...action.businesses]
          // };
          newState = {...state}
          newEntries = {}
          action.businesses.forEach(business => newEntries[business.id] = business)
          newState.entries = newEntries
          return newState
        default:
            return state;
    }
}

export default businessReducer;


// export const getOneBusiness = id => async dispatch => {
//     const response = await fetch(`/api/businesses/${id}`);
//     const business = await response.json();
//     dispatch(getOne(business))
// }