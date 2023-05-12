import React from "react";
import headerLogo from "../images/logo.svg";
import NavBar from "./NavBar";
import { Link, Route, Routes } from "react-router-dom";

function Header({ userEmail, loggedIn, onOut }) {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип mesto" />

      <Routes>
        <Route
          path="/sign-in"
          element={
            <Link className="menu__link" to={"/sign-up"}>
              Регистрация
            </Link>
          }
        />
        <Route
          path="/sign-up"
          element={
            <Link className="menu__link" to={"/sign-in"}>
              Войти
            </Link>
          }
        />
        <Route
          path="/"
          element={<NavBar userEmail={userEmail} loggedIn={loggedIn} onOut={onOut}/>}
        />
      </Routes>
    </header>
  );
}

export default Header;
