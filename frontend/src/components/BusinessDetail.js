
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchOneBusiness } from '../store/business';
import { useDispatch } from 'react-redux';



const BusinessDetail = () => {
    //console.log('are we here?')
    const dispatch = useDispatch();
    const  businessId  = useParams();

    const business = useSelector((state) => state.businessState.businessObj)
    //console.log(business)
    // const businessObject = business.businessObj

    useEffect(() => {
        dispatch(fetchOneBusiness(businessId.id))
    },[dispatch,businessId.id])



    return (
        <div>
            <h2>{`${business?.title}`}</h2>
            <p>{`${business?.description}`}</p>
        </div>
    )
}

export default BusinessDetail