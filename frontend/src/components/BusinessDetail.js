
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchOneBusiness } from '../store/business';
import { useDispatch } from 'react-redux';
import { deleteBusiness } from '../store/business';



const BusinessDetail = () => {
    //console.log('are we here?')
    const dispatch = useDispatch();
    const  businessId  = useParams();

    const business = useSelector((state) => state.businessState.businessObj)
    console.log('BUSINESS FRONTEND', business)
    // const businessObject = business.businessObj

    useEffect(() => {
        dispatch(fetchOneBusiness(businessId.id))
    },[dispatch,businessId.id])

    const handleDelete = (e) => {
        e.preventDefault();
        return dispatch(deleteBusiness(business))
    }

    return (
        <div>
            <h2>{`${business?.title}`}</h2>
            <p>{`${business?.description}`}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default BusinessDetail