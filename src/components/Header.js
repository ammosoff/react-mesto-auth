import React from "react";
import headerLogo from "../images/logo.svg";
import NavBar from "./NavBar";

function Header({ userEmail, onOut }) {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип mesto" />
      <NavBar userEmail={userEmail} onOut={onOut}/>
    </header>
  );
}

export default Header;
