import { csrfFetch } from "./csrf"
const LOAD_BUSINESS = 'business/loadBusiness'
const LOAD_ONE_BUSINESS = 'business/loadOneBusiness'

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

export const loadOneBusiness = (business) => {
  return {
    type: LOAD_ONE_BUSINESS,
    business
  }
}

//GET request thunk
export const fetchBusinesses = () => async dispatch => {
  const res = await csrfFetch('/api/business/businesses')
  console.log('RES', res)
  const businesses = await res.json()
  console.log('BUSINESS??', businesses)
  dispatch(loadBusiness(businesses))
  return loadBusiness
}

//GET one business thunk
export const fetchOneBusiness = id => async dispatch => {
  const res = await csrfFetch(`/api/business/${id}`)
  const business = await res.json()
  dispatch(loadOneBusiness(business))
}


const initialState = { entries: ['test'], isLoading: true }

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
        
        case LOAD_ONE_BUSINESS:
          // newState = {...state}
          // newEntries = {}
          // action.businesses.forEach(business => newEntries[business.id] = business)
          // newState.entries = newEntries
          // return newState
          return {
            ...state,
            businessObj: {
              ...state[action.business.id],
              ...action.business,
            },
          };
        

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