
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { editBusiness, fetchOneBusiness } from '../../store/business';
import { useDispatch } from 'react-redux';
import { deleteBusiness } from '../../store/business';
import { fetchSpecificReviews } from '../../store/review';
import './BusinessPage.css'



const BusinessDetail = () => {
    //console.log('are we here?')
    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();
    // console.log(typeof +id)
    const sessionUser = useSelector(state => state.session.user)
    //console.log('USER', sessionUser)
    const business = useSelector((state) => state.businessState[id])
    //console.log('BUSINESS FRONTEND', business)
    // const businessObject = business.businessObj

    const reviews = useSelector((state) => state.reviewState)
    const reviewsArray = Object.values(reviews)
    console.log('!!!!!!!!', reviewsArray)


    useEffect(() => {
        dispatch(fetchOneBusiness(+id))
        dispatch(fetchSpecificReviews(+id))
    }, [dispatch, +id])

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
        history.push(`/reviews/new/${id}`)
    }

    const ratingsAvg = (array) => {
        let sum = 0;
        array.forEach(review => (
            sum += review.rating
        ))
        return sum/array.length
    } 
    console.log(ratingsAvg(reviewsArray));

    let businessDetailHTML;
    if (sessionUser && sessionUser.id === business.ownerId) {
        businessDetailHTML = (
            <>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleEdit}>Edit</button>
            </>
        )
    }
    return (
        <div className='large-container'>
            <div className='filler'></div>
            <div className='photo-div'>
                <img alt='business photo' src={`${business?.imageUrl}`}></img>
            </div>

            <div className='filler'></div>
            <div className='filler'></div>
            <div className='first-row'>
                <h1>{`${business?.title}`}</h1>
                <h2>Average Rating: {ratingsAvg(reviewsArray)}</h2>
                <button onClick={redirect}>Write a Review</button>
                <p>{`${business?.description}`}</p>
                <p>{`${business?.address}`}</p>
                <p>{`${business?.city}`}</p>
                <p>{`${business?.zipCode}`}</p>
                {businessDetailHTML}
            </div>
            <div className='filler'></div>
            <div className='filler'></div>

            <div>
                {reviewsArray.map(review => (
                    <p>{review.review}</p>
                ))}
            </div>



        </div>
    )
}

export default BusinessDetail

