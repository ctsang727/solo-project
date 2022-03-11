import { csrfFetch } from "./csrf"

const LOAD_REVIEWS = 'reviews/loadReviews'
const LOAD_SPECIFIC_REVIEWS = 'reviews/specificReviews'

export const loadReviews = (reviews) => (
    {
        type: LOAD_REVIEWS,
        reviews
    }
)

export const loadSpecificReviews = (reviews) => (
    {
        type: LOAD_SPECIFIC_REVIEWS,
        reviews
    }
)


//GET all reviews thunk
export const fetchReviews = () => async dispatch => {
    const res = await csrfFetch('/api/reviews/allReviews')
    

    if (res.ok) {
        const reviews = await res.json()
        dispatch(loadReviews(reviews))
        return reviews
    }
}

//GET reviews for one business thunk
export const fetchSpecificReviews = id => async dispatch => {
    console.log('333333333333', id)
    const res = await csrfFetch(`/api/reviews/${id}`)
    const reviews = await res.json()
    dispatch(loadSpecificReviews(reviews))
}


const reviewReducer = (state = {}, action) => {
    switch(action.type){
        case LOAD_REVIEWS:
            const allReviews = {};
            action.reviews.forEach(review => {
                allReviews[review.id] = review;
            })
            return allReviews;
        
        case LOAD_SPECIFIC_REVIEWS:
            const specificReviews = {};
            action.reviews.forEach(review => {
                specificReviews[review.id] = review;
            })
            return specificReviews;

        default:
            return state;
    }
}

export default reviewReducer;