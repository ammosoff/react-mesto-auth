import React from "react";
import { useNavigate, Link } from "react-router-dom";

function NavBar({ userEmail, loggedIn }) {
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem("token");
    userEmail = null;
    navigate("sign-in", { replace: true });
  };

  return (
    <nav className="menu">
      <p className="menu__email">{userEmail}</p>
      <Link
        className={`menu__link ${loggedIn ? "menu__link_active" : ""}`}
        to={"/sign-in"}
        onClick={signOut}
      >
        Выйти
      </Link>
    </nav>
  );
}

export default NavBar;
