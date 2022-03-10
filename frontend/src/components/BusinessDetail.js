
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchOneBusiness } from '../store/business';
import { useDispatch } from 'react-redux';
import { deleteBusiness } from '../store/business';



const BusinessDetail = () => {
    //console.log('are we here?')
    const dispatch = useDispatch();
    const  {id}  = useParams();
    // console.log(typeof +id)

    const business = useSelector((state) => state.businessState[id])
    console.log('BUSINESS FRONTEND', business)
    // const businessObject = business.businessObj

    useEffect(() => {
        dispatch(fetchOneBusiness(+id))
    },[dispatch,+id])

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

