import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBusinesses } from '../../store/business';
import { useHistory } from 'react-router-dom';
import './AllBusinesses.css'
const styleBusinessLinks = {
    color: 'black',
    fontSize: '20px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
}


const AllBuinessesPage = () => {
    //console.log('all businesses listed here')
    const history = useHistory();
    const dispatch = useDispatch();
    const businessList = useSelector((state) => state.businessState)
    const businessArray = Object.values(businessList)

    useEffect(() => {
        dispatch(fetchBusinesses())
    }, [dispatch])



    return (
        <div className='all-large-container'>
            <div className='filler'></div>
            <div className='business-list-container'>
                <div className='page-header-text'>
                <h2>Been to these businesses recently?</h2>
                </div>
                {businessArray.map(business => (
                    <span>
                        <div className='image-div'><img src={`${business.imageUrl}`}></img></div>
                        <div className='text-div'>
                            <Link to={`/business/${business.id}`} style={styleBusinessLinks}>{business.title}</Link>
                        <p>{business.description}</p>
                        </div>
                        
                    </span>
                ))}
            </div>
            <div className='filler'></div>
        </div>

    )
}

export default AllBuinessesPage