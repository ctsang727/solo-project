import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import './Splashpage.css'
import ProfileButton from '../Navigation/ProfileButton';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBusinesses } from '../../store/business';
import { useHistory } from 'react-router-dom';
import { fetchReviews } from '../../store/review';
import Search from '../SearchBar/Search';


const styleLogin = {
    textDecoration: 'none',
    color: 'white',
    padding: '5px'
}

const styleSignup = {
    textDecoration: 'none',
    color: 'white',
    border: '2px solid white',
    padding: '5px',
    borderRadius: '3px',
    
    
}

const styleBusinessLinks = {
    color: '#d32323',
    fontSize: '20px',
    textDecoration: 'none',
    fontFamily:" Helvetica Neue,Helvetica,Arial,sans-serif",
    fontWeight: 'bold',
}

const Splashpage = () => {
    console.log('on splash')
    const history = useHistory();
    const dispatch = useDispatch();
    const businessList = useSelector((state) => state.businessState)
    const businessArray = Object.values(businessList)
    const reviewList = useSelector((state) => state.reviewState)
    const reviewArray = Object.values(reviewList)


    useEffect(() => {
        dispatch(fetchBusinesses());
        dispatch(fetchReviews());
    }, [dispatch])


    const sessionUser = useSelector(state => state.session.user);
    let splashLinks;
    if (sessionUser) {
        splashLinks = (
            <><nav>
                <ul className='splash-ul'>
                    <li><Link to='/all' style={styleLogin}>Write a Review</Link></li>
                    <li><Link to='/new' style={styleLogin}>Add a Business</Link></li>
                    <li></li>
                    <li></li>
                    <ProfileButton user={sessionUser} />
                </ul>
            </nav></>



        );
    } else {
        splashLinks = (
            <nav>
                <ul className='splash-ul'>
                    <li><Link to='/all' style={styleLogin}>Write a Review</Link></li>
                    <li>
                        <Link to='/signup' style={styleLogin}>Add a Business</Link>
                    </li>
                    <li></li>
                    <li>
                        <Link to='/login' style={styleLogin}>Log In</Link>
                    </li>
                    <li>
                        <Link to='/signup' style={styleSignup}>Sign Up</Link>
                    </li>
                </ul>
            </nav>
        )

    }

    return (
        <div>

            <div className='splash-everything'>

                <div className='splash-main-container'>
                    <div className='splash-nav'>
                        <div></div>

                        {splashLinks}
                        <div></div>
                    </div>
                    <div className='splash-logo'>
                        <img className='yelp-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Yelp_Logo.svg/2560px-Yelp_Logo.svg.png'></img>
                    </div>
                    <div>
                        <Search data={businessList} /> 
                    </div>
                    
                </div>
                <div className='below-photo-container'>
                    <div className='filler'></div>
                    <div className='below-photo'>
                        {businessArray.map(business => (
                            <span className='home-span'>
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
            </div>

        </div>
    )
}

export default Splashpage;