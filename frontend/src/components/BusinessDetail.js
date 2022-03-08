//import stuff
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getOneBusiness } from '../store/business';
import { useDispatch } from 'react-redux';


const BusinessDetail = () => {
    const  businessId  = useParams();
    //console.log('from frontend component', businessId)
    
    const business = useSelector(state => state.business);
    console.log(business)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOneBusiness(businessId))
    },[dispatch, businessId])





    return (
        <div>
            <h1>Business Here</h1>
            <h2>{`${business}`}</h2>
        </div>
    )
}

export default BusinessDetail