import React from 'react';
import { Link } from 'react-router-dom'
import './Splashpage.css'

//import { coverUrl } from '../../utilities/utils';

/*    SPLASHPAGE COMPONENT
  Create a simple splash page that displays a pokemon game cover
    it should be 800px tall & centered on the page.
    the game cover should be a link to the homepage.

    coverURL: inside utils


    
*/


const Splashpage = ({ }) => {

    return (
        <div>

            <div className='splash-everything'>

                <div className='splash-main-container'>
                    <div className='splash-nav'>
                        <nav>
                            <ul className='splash-ul'>
                                <li>Write a Review</li>
                                <li>For Businesses</li>
                                <li></li>
                                <li>Log In</li>
                                <li>Sign Up</li>
                            </ul>
                        </nav>
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

                {/* <div className='splash-col-1'>
                    <h1> column 1 </h1>
                </div>
                <div className='splash-col-2'>
                    <h1> column 2 </h1>
                </div>

                <div className='splash-col-3'>
                    <h1> column 3 </h1>
                </div> */}
                {/* <h1>Tyelp</h1>
                <Link to='/'>
                    TYELPPPP
                </Link> */}
            </div>

        </div>
    )
}

export default Splashpage;