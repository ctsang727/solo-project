import React from 'react'
import { useState } from 'react';
import { FaStar } from 'react-icons/fa'
import './stars.css'
function Stars(props) {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null)
    props.func(rating)
    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1
                return (
                    <label>
                        <input 
                        type='radio' 
                        name='rating' 
                        value={ratingValue} 
                        onClick={() => setRating(ratingValue)}
                        >
                
                        </input>
                        <FaStar 
                        className='star' 
                        size={30}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                        color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'} />
                    </label>
                );
            })}
            
        </div>
    )
}

export default Stars