
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { editBusiness, fetchOneBusiness } from '../store/business';
import { useDispatch } from 'react-redux';
import { deleteBusiness } from '../store/business';
import { fetchSpecificReviews } from '../store/review';



const BusinessDetail = () => {
    //console.log('are we here?')
    const dispatch = useDispatch();
    const  {id}  = useParams();
    const history = useHistory();
    // console.log(typeof +id)
    const sessionUser = useSelector(state => state.session.user)
    //console.log('USER', sessionUser)
    const business = useSelector((state) => state.businessState[id])
    //console.log('BUSINESS FRONTEND', business)
    // const businessObject = business.businessObj
    const reviews  = useSelector((state) => state.reviewState[id])
    

    useEffect(() => {
        dispatch(fetchOneBusiness(+id))
        dispatch(fetchSpecificReviews(+id))
    },[dispatch,+id])

    const handleDelete = (e) => {
        e.preventDefault();
        history.push('/')
        return dispatch(deleteBusiness(business))
        
    }

    const handleEdit = (e) => {
        e.preventDefault();
        history.push(`/business/edit/${id}`)
    }
    let businessDetailHTML;
    if (sessionUser && sessionUser.id === business.ownerId){
        businessDetailHTML = (
            <>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
            </>
        )
    }
    return (
        <div>
            
            <h2>{`${business?.title}`}</h2>
            <p>{`${business?.description}`}</p>
            <p>{`${business?.address}`}</p>
            <p>{`${business?.city}`}</p>
            <p>{`${business?.zipCode}`}</p>
            {businessDetailHTML}
            <div>
                <img alt='business photo' src={`${business?.imageUrl}`}></img>
            </div>
            

            <div>
                <h3>{`${reviews?.answer}`}</h3>
            </div>
            
            
        </div>
    )
}

export default BusinessDetail

