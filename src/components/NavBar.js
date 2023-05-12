import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar({ userEmail }) {
  return (
    <nav className="menu">
      <p className='menu__email'>{userEmail}</p>
      <NavLink className={"menu__link"} to="/">Выйти</NavLink>
    </nav>
  );
}

export default NavBar;