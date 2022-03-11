import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom";
import { postReview } from "../store/review";



const NewReviewForm = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();
    const id = useParams();
    const businessId = id.id
    const [review, setReview] = useState('');
    const [rating, setRating] = useState('');
    const [errors, setErrors] = useState([])
    //use dropdown for rating for now, change to stars by the end

    useEffect(() => {
        const errors = []
        if (!rating) errors.push('Rating required')
        if (!review) errors.push('Review required')

        setErrors(errors)
    }, [review, rating])


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


    return (
        <div>
            <h2>Review for business</h2>
            <form onSubmit={handleSubmit}>
                <select
                    onChange={(e) => setRating(e.target.value)}
                    value={rating}
                    name='rating'>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
                <textarea
                    onChange={(e) => setReview(e.target.value)}
                    value={review}
                    placeholder='Write your review here'
                    name='review'
                >
                </textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )






}
export default NewReviewForm