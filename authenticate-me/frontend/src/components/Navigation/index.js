import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import Search from '../SearchBar/Search'
import { fetchBusinesses } from '../../store/business';

function Navigation({ isLoaded }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const businessList = useSelector((state) => state.businessState)
  useEffect(() => {
    dispatch(fetchBusinesses())
}, [dispatch])
  //console.log('123', businessList)
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <NavLink className='inactive' activeclassName='active' exact to="/">Home</NavLink>
      <NavLink className='inactive' activeclassName='active' to="/new"> For Businesses </NavLink>
      <NavLink className='inactive' activeclassName='active' to="/all"> Write a Review </NavLink>
      <Search data={businessList}/>
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