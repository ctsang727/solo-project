import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <NavLink className='inactive' activeclassName='active' exact to="/">Home</NavLink>
      <NavLink className='inactive' activeclassName='active' to="/new"> For Businesses </NavLink>
      <NavLink className='inactive' activeclassName='active' to="/all"> Write a Review </NavLink>
      <ProfileButton user={sessionUser} />
      </>
      );
  } else {
    sessionLinks = (
      <>
        <NavLink className='inactive' activeclassName='active' exact to="/">Home</NavLink>
        <NavLink className='inactive' activeclassName='active' to="/new"> For Businesses </NavLink>
        <NavLink className='inactive' activeclassName='active' to="/all"> Write a Review </NavLink>
        <NavLink className='inactive' activeclassName='active' to="/login"> Log In </NavLink>
        <NavLink className='inactive' activeclassName='active' to="/signup"> Sign Up </NavLink>
      </>
    );
  }

  return (
    <div className='navbar-container'>
      <ul id='navbar'>
        
          {isLoaded && sessionLinks}
        
      </ul>
    </div>
  );
}

export default Navigation;