import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import './Splashpage.css'
import ProfileButton from '../Navigation/ProfileButton';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBusinesses } from '../../store/business';


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

const Splashpage = () => {
    console.log('on splash')
    const dispatch = useDispatch();
    const businessList = useSelector((state) => state.businessState)
    //console.log('LLLLLLLLLLLL', businessList)
    
    useEffect(() => {
        dispatch(fetchBusinesses()) 
    }, [dispatch])


    const sessionUser = useSelector(state => state.session.user);
    let splashLinks;
    if (sessionUser) {
        splashLinks = (
            <ProfileButton user={sessionUser} />
         
        );
    } else {
        splashLinks = (
            <nav>
                <ul className='splash-ul'>
                    <li>Write a Review</li>
                    <li>For Businesses</li>
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
                    <div className='splash-search'>
                        <input className='splash-search-bar'></input>
                    </div>
                    <div className='splash-under-search'>
                        <ul className='splash-ul-under-search'>
                            <li>Plumbers</li>
                            <li>Restaurants</li>
                            <li>Home Services</li>
                            <li>Delivery</li>
                            <li>Black Owned</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Splashpage;