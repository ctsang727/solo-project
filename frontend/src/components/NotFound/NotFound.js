import React from 'react'
import './NotFound.css'


function NotFound() {
  return (
    <>
    <div id='not-found-container'>
        <div id='not-found-left'>

            <h2>We’re sorry. We can’t find the page you’re looking for.</h2>
            <p>Return to <a href='/'>home</a></p>
        </div>


        <div id='not-found-right'>
            <img src='images/notfound.png'></img>

        </div>
    </div>
    </>
  )
}

export default NotFound