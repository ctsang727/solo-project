const GET_ONE = 'business/GET_ONE'

const getOne = business => ({
    type: GET_ONE,
    business,
})

export const getOneBusiness = id => async dispatch => {
    const response = await fetch(`/api/businesses/${id}`);
    const business = await response.json();
    dispatch(getOne(business))
}

const initialState = {
    id: 1
}
console.log('initialstate', initialState);

const businessReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ONE:{
            return {
              ...state,
              [action.business.id]: {
                ...state[action.business.id],
                ...action.business,
              },
            };
          }
        default:
            return state;
    }
}

export default businessReducer;