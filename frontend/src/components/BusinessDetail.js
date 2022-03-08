//import stuff
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchBusinesses } from '../store/business';
import { fetchOneBusiness } from '../store/business';
import { useDispatch } from 'react-redux';



const BusinessDetail = () => {
    const dispatch = useDispatch();
    const  businessId  = useParams();
    console.log('BUSINESSID FRONTEND', businessId)
    //console.log('from frontend component', businessId)
    // const businessesObject = useSelector((state) => state.businessState.entries);
    // const businesses = Object.values(businessesObject)
    // console.log(business)

    const business = useSelector((state) => state.businessState)
     const businessObject = business.businessObj
    console.log(business)
    console.log(businessObject)
    
    // useEffect(() => {
    //     dispatch(fetchBusinesses())
    // },[dispatch])

    useEffect(() => {
        dispatch(fetchOneBusiness(businessId.id))
    },[dispatch,businessId.id])

    





    return (
        <div>
            <h2>{`${businessObject?.title}`}</h2>
            <p>{`${businessObject?.description}`}</p>
            
        </div>
    )
}

export default BusinessDetail