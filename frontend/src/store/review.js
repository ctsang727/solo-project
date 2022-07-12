import { csrfFetch } from "./csrf"

const LOAD_REVIEWS = 'reviews/loadReviews'
const LOAD_SPECIFIC_REVIEWS = 'reviews/specificReviews'
const ADD_REVIEW = 'reviews/addReview' 
const REMOVE_REVIEW = 'reviews/deleteReview'

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

export const addReview = (review) => (
    {
        type: ADD_REVIEW,
        review 
    }
)

export const removeReview = reviewId => (
    {
        type: REMOVE_REVIEW,
        reviewId
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
    //console.log('333333333333', id)
    const res = await csrfFetch(`/api/reviews/${id}`)
    const reviews = await res.json()
    dispatch(loadSpecificReviews(reviews))
}

//POST review for a business
export const postReview = review => async dispatch => {
   // console.log('IN THUNK', review)
    const res = await csrfFetch(`/api/reviews/new/${review.businessId}`, {
        method: 'POST',
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify(review)
    })
    const newReview = await res.json()
    dispatch(addReview(newReview))
    return newReview
}

//DELETE review
export const deleteReview = reviewId => async dispatch => {
    console.log('IN DELETE REVIEW THUNK', reviewId)

    const response = await csrfFetch(`/api/reviews/${reviewId}`,
    {
        method: 'DELETE',
    });
    if (response.ok) {
        const deletedId = await response.json()
        dispatch(removeReview(deletedId))
        return deletedId
    }
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

        case ADD_REVIEW:
            let newState;
            newState = {...state}
            newState[action.review.businessId] = action.review;
            return newState;

        case REMOVE_REVIEW:
            //console.log('INSIDE REDUCER', newState[action.review])
            let removeState = {...state}
            delete removeState[action.reviewId]
            return removeState

        default:
            return state;
    }
}

export default reviewReducer;