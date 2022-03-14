
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { fetchOneBusiness } from '../../store/business';
import { useDispatch } from 'react-redux';
import { deleteBusiness } from '../../store/business';
import { fetchSpecificReviews } from '../../store/review';
import { deleteReview } from '../../store/review';
import './BusinessPage.css'



const BusinessDetail = () => {
    console.log('MAIN BUSINESS PAGE')
    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user)
    const business = useSelector((state) => state.businessState[id])

    const reviews = useSelector((state) => state.reviewState)
    const reviewsArray = Object.values(reviews)

    useEffect(() => {
        dispatch(fetchOneBusiness(+id))
        dispatch(fetchSpecificReviews(+id))
    }, [dispatch, id])

    const handleDelete = (e) => {
        e.preventDefault();

        history.push('/')
        return dispatch(deleteBusiness(business))

    }

    const handleEdit = (e) => {
        e.preventDefault();
        history.push(`/business/edit/${id}`)
    }

    const redirect = (e) => {
        e.preventDefault();
        if (sessionUser) {
            history.push(`/reviews/new/${id}`)
        } else {
            history.push(`/login`)
        }

    }

    const ratingsAvg = (array) => {
        let sum = 0;
        let something = 'None'
        if (array.length < 1) {
            return something
        } else {
            array.forEach(review => (
                sum += review.rating
            ))
            return (sum / array.length).toFixed(2)
        }

    }

    let businessDetailHTML;
    if (sessionUser && sessionUser.id === business.ownerId) {
        businessDetailHTML = (
            <>
                <button onClick={handleDelete}>Delete Business</button>
                <button onClick={handleEdit}>Edit Business Information</button>
            </>
        )
    }

    //want to be able to see business details without having to be logged in
    // let divDetails;
    // if (sessionUser) {
    //     divDetails = (<div className='details'>
    //         {reviewsArray.map(review => (
    //             <>
    //                 <div key='key' className='more-details'>
    //                     <p>Rating: {review.rating}/5</p>
    //                     <p className='review-review'>{review.review}</p>
    //                     <div>{review.userId === sessionUser.id &&
    //                         <button onClick={async () => { await dispatch(deleteReview(review?.id)) }}>Delete</button>}
    //                     </div>
    //                 </div>
    //             </>
    //         ))}
    //     </div>)
    // }

    return (
        <div className='large-container'>
            <div className='filler'></div>
            <div className='photo-div'>
                <img alt='business photo' src={`${business?.imageUrl}`}></img>
                <div className='h-container'>
                    <h1>{`${business?.title}`}</h1>
                    <h2 className='rating'>Average Rating: {ratingsAvg(reviewsArray)}</h2>
                </div>
            </div>

            <div className='filler'></div>
            <div className='filler'></div>
            <div className='important-div'>

                <div className='first-row'>

                    <button onClick={redirect}>Write a Review</button>
                    <p>{`${business?.address}`}, {`${business?.city}`}, {`${business?.zipCode}`} </p>
                    <p>{`${business?.description}`}</p>
                    {businessDetailHTML}
                </div>
                {/* {sessionUser.id === review  && divReviews} */}
                <div className='reviews'>
                    <h2>Reviews:</h2>
            
                        <div className='details'>
                            {reviewsArray.map(review => (
                                <>
                                    <div key='key' className='more-details'>
                                        <p>Rating: {review.rating}/5</p>
                                        <p className='review-review'>{review.review}</p>
                                        {sessionUser && <div>{review.userId === sessionUser.id &&
                                            <button onClick={async () => { await dispatch(deleteReview(review?.id)) }}>Delete</button>}
                                        </div>}
                                        
                                    </div>
                                </>
                            ))}
                        </div>

                </div>
            </div>
            <div className='filler'></div>
            <div className='filler'></div>
        </div>
    )
}

export default BusinessDetail

