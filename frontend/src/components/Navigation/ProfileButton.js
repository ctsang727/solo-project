import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory()

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };

  return (
    <>
      <div className="profile-button-container">
        <button className="profile-button" onClick={openMenu}>
          <i className="fas fa-user-circle" />
        
        {showMenu && (
          <ul className="profile-dropdown">
            <li style={{color:'black'}}>{user.firstName} {user.lastName}</li>
            <li style={{color:'black'}}>{user.email}</li>
            <li>
              <button className="profile-logout-button" onClick={logout}>Log Out</button>
            </li>
          </ul>
        )}
        </button>
      </div>

    </>
  );
}

export default ProfileButton;