import React from 'react';
/* import { NavLink, useHistory } from 'react-router-dom'; */
import { Routes, Route, Navigate, useNavigate, Link, useHistory  } from "react-router-dom";

function NavBar({ userEmail, loggedIn }) {
  console.log(loggedIn)

  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem('token');
    userEmail = null;
    navigate("sign-in", { replace: true });
  }

  return (
    <nav className="menu">
      <p className='menu__email'>{userEmail}</p>
      <Link className={`menu__link ${loggedIn ? "menu__link_active" : ""}`} to={'/sign-in'} onClick={signOut}>Выйти</Link>
    </nav>
  );
}

export default NavBar;