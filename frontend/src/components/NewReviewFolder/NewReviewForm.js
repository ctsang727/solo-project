import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom";
import { postReview } from "../../store/review";
import { fetchOneBusiness } from '../../store/business';
import './NewReview.css'
import Stars from "../StarRating/Stars";



const NewReviewForm = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();
    const id = useParams();
    const businessId = id.id
    const business = useSelector((state) => state.businessState[businessId])
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(3);
    const [errors, setErrors] = useState([])
    //use dropdown for rating for now, change to stars by the end

    useEffect(() => {
        const errors = []
        if (!rating) errors.push('Rating required')
        if (!review) errors.push('Review required')

        setErrors(errors)
    }, [review, rating])

    useEffect(() => {
        dispatch(fetchOneBusiness(businessId))
    }, [dispatch, id])


    const handleSubmit = async (e) => {
        e.preventDefault();
        const userId = sessionUser?.id
        if (!userId) history.push('/login')
        const newReview = {
            businessId,
            userId,
            review,
            rating,

        }
        

        const freshReview = await dispatch(postReview(newReview))
        console.log(freshReview)

        history.push(`/business/${businessId}`)
    }

    const handleCancel = (e) => {
        e.preventDefault();
        history.push(`/business/${businessId}`)
    }

    const test = (data) => {
        setRating(data)
    }
    
    return (
        <div className="new-review-container">
            <h2>Review for {business.title}</h2>
            <form onSubmit={handleSubmit}>
                <Stars func={test}/>
                
                
                {/* <select
                    onChange={(e) => setRating(e.target.value)}
                    value={rating}
                    name='rating'>
                    <option value={5}>5</option>
                    <option value={4}>4</option>
                    <option value={3}>3</option>
                    <option value={2}>2</option>
                    <option value={1}>1</option>
                </select> */}
                <textarea
                    onChange={(e) => setReview(e.target.value)}
                    value={review}
                    placeholder='To submit your review, please explain your rating to others.'
                    name='review'
                >
                </textarea>
                <div className="buttons">
                <button type='submit'>Submit</button>
                <button onClick={handleCancel}>Cancel</button>

                </div>
            </form>
        </div>
    )






}
export default NewReviewForm