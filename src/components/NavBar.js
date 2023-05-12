import React from "react";
import { Link, Route, Routes } from "react-router-dom";

function NavBar({ userEmail, onOut }) {
  return (
    <nav className="menu">
      <p className="menu__email">{userEmail}</p>
      <Routes>
        <Route
          path="/"
          element={
            <Link
              className="menu__link menu__link_active"
              to="/sign-in"
              onClick={onOut}
            >
              Выйти
            </Link>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Link className="menu__link" to="/sign-up">
              Регистрация
            </Link>
          }
        />
        <Route
          path="/sign-up"
          element={
            <Link className="menu__link" to="/sign-in">
              Войти
            </Link>
          }
        />
      </Routes>
    </nav>
  );
}

export default NavBar;
