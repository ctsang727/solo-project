//import stuff
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchBusinesses } from '../store/business';
import { useDispatch } from 'react-redux';



const BusinessDetail = () => {
    const dispatch = useDispatch();
    // const  businessId  = useParams();
    //console.log('from frontend component', businessId)
    const businessesObject = useSelector((state) => state.businessState.entries);
    const businesses = Object.values(businessesObject)
    // console.log(business)
    
    useEffect(() => {
        dispatch(fetchBusinesses())
    },[dispatch])





    return (
        <div>
            <h1>Business Here</h1>
            {/* <ol>
                {businesses.map()}
            </ol> */}
        </div>
    )
}

export default BusinessDetail