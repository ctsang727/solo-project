import { csrfFetch } from "./csrf"

const LOAD_BUSINESS = 'business/loadBusiness'
const LOAD_ONE_BUSINESS = 'business/loadOneBusiness'
const ADD_ONE = 'business/addBusiness'
const UPDATE_ONE = 'business/editBusiness'

// export const loadBusiness = (businesses) => {
//   return { 
//     type: LOAD_BUSINESS, 
//     businesses
//   }
// }

export const addBusiness = (newBusiness) => ({
  type: ADD_ONE,
  newBusiness,
});

export const loadOneBusiness = (business) => {
  return {
    type: LOAD_ONE_BUSINESS,
    business
  }
}

const updateOne = business => ({
  type: UPDATE_ONE,
  business,
});


//GET all business request thunk
// export const fetchBusinesses = () => async dispatch => {
//   const res = await csrfFetch('/api/business/businesses')
//   console.log('RES', res)
//   const businesses = await res.json()
//   console.log('BUSINESS??', businesses)
//   dispatch(loadBusiness(businesses))
//   return loadBusiness
// }

//GET one business thunk
export const fetchOneBusiness = id => async dispatch => {
  const res = await csrfFetch(`/api/business/${id}`)
  const business = await res.json()
  dispatch(loadOneBusiness(business))
}

//POST new business thunk
export const postBusiness = (data) => async dispatch => {
  console.log('in THUNK')
  const res = await csrfFetch('/api/business/new', {
    method: 'POST',
    headers: { "Content-Type": "application/json", },
    body: JSON.stringify(data)
  })
  const newBusiness = await res.json()
  console.log('NEWBIZ BOTTOM THUNK', newBusiness)
  dispatch(addBusiness(newBusiness))
  return newBusiness;
}

export const editBusiness = (id) => async dispatch => {
  const response = await csrfFetch(`/api/business/${id}/edit`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(id),
  });

  if (response.ok) {
    const business = await response.json();
    dispatch(updateOne(business));
    return business;
  }

}


const initialState = { entries: ['test'], isLoading: true }

const businessReducer = (state = initialState, action) => {
  
    switch(action.type) {  
     
        case LOAD_ONE_BUSINESS:
          return {
            ...state,
            businessObj: {
              ...state[action.business.id],
              ...action.business,
            },
          };
        case ADD_ONE:
          let newState;
          let newEntries;
          newState={...state}
          newEntries={...state.entries}
          newEntries[action.newBusiness.id] = action.newBusiness;
          newState.entries = newEntries
          return newState;

        default:
            return state;
    }
}

export default businessReducer;


//this will load all businesses
// let newState;
//   let newEntries;
        // case LOAD_BUSINESS:
        //   // return {
        //   //   ...state,
        //   //   entries: [...action.businesses]
        //   // };
        //   newState = {...state}
        //   newEntries = {}
        //   action.businesses.forEach(business => newEntries[business.id] = business)
        //   newState.entries = newEntries
        //   return newState

// export const getOneBusiness = id => async dispatch => {
//     const response = await fetch(`/api/businesses/${id}`);
//     const business = await response.json();
//     dispatch(getOne(business))
// }