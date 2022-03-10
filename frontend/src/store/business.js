import { csrfFetch } from "./csrf"

const LOAD_BUSINESSES = 'business/loadBusinesses'
const LOAD_ONE_BUSINESS = 'business/loadOneBusiness'
const ADD_ONE = 'business/addBusiness'
const UPDATE_ONE = 'business/editBusiness'
const REMOVE_BUSINESS = 'business/deleteBusiness'

export const loadBusinesses = (businesses) => (
  {
    type: LOAD_BUSINESSES,
    businesses
  }
)

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

const removeBusiness = business => ({
  type: REMOVE_BUSINESS,
  business
})


//GET all business request thunk
export const fetchBusinesses = () => async dispatch => {
  const res = await csrfFetch('/api/business/businesses')
  //console.log('RES', res)

  if (res.ok){
    const businesses = await res.json()
    //console.log('BUSINESS??', businesses)
    dispatch(loadBusinesses(businesses))
    return businesses;
  }
  
}

//GET one business thunk
export const fetchOneBusiness = id => async dispatch => {
  console.log('GET ONE BIZ THUNK', id);
  const res = await csrfFetch(`/api/business/${id}`)
  const business = await res.json()
  dispatch(loadOneBusiness(business))
}

//POST new business thunk
export const postBusiness = business => async dispatch => {
  //console.log('in THUNK')
  const res = await csrfFetch('/api/business/new', {
    method: 'POST',
    headers: { "Content-Type": "application/json", },
    body: JSON.stringify(business)
  })
  const newBusiness = await res.json()
  //console.log('NEWBIZ BOTTOM THUNK', newBusiness)
  dispatch(addBusiness(newBusiness))
  return newBusiness;
}

//edit thunk
export const editBusiness = data => async dispatch => {
  //console.log('IN THUNK EDIT', data);
  const response = await csrfFetch(`/api/business/edit/${data.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const editedBusiness = await response.json();
    dispatch(updateOne(editedBusiness));
    //console.log('BOTTOM EDIT THUNK', editedBusiness)
    return editedBusiness;
  }
}

//delete thunk
export const deleteBusiness = business => async dispatch => {
  console.log('THUNK', business, 'ID', business.id)
  const response = await csrfFetch(`/api/business/${business.id}`,
  {
    method: 'DELETE',
  });
  if (response.ok) {
    console.log('RESPONSE OK AND DELETED')
    const deletedBusiness = await response.json();
    dispatch(removeBusiness(deletedBusiness))
    console.log('DELETED FOR SURE', deletedBusiness)
    return deletedBusiness;
  }
}


const businessReducer = (state = {}, action) => {
    //let newState = {...state}
    switch(action.type) {  
        case LOAD_BUSINESSES:
          const allBusinesses = {};
          //console.log('ACTION', action)
          action.businesses.forEach(business => {
            allBusinesses[business.id] = business; 
          })
          return allBusinesses;

        case LOAD_ONE_BUSINESS:
          // newState[action.business.id] = action.business
          // return newState
          return {

            ...state,
            [action.business.id]: action.business
            // businessObj: {
            //   ...state[action.business?.id],
            //   ...action.business,
            // },
          };
        case ADD_ONE:
          let newState;
          newState={...state}
          newState[action.newBusiness.id] = action.newBusiness;
          return newState;
        
        case UPDATE_ONE:
          return {
            ...state,
            [action.business.id]: action.business,
          };

        case REMOVE_BUSINESS:
          // const newNewState = {...state};
          // console.log('FROM REDUCER', newNewState)
          // delete newNewState[action.business.id]
          // console.log('FROM REDUCER AGAIN', newNewState)
          // return newNewState;

          return {
            ...state,
            [action.business.id]: action.business
          }



        default:
            return state;
    }
}

export default businessReducer;

