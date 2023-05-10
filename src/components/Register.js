import React from "react";
import { Link } from 'react-router-dom';

function Register() {
  return (
    <section className="login">
      <h2 className="login__title">Регистрация</h2>
      <form className="login__form">
        <input
          id="email-input"
          className="login__form-input"
          name="email"
          type="email"
          placeholder="Email"
          required
        ></input>
        <input
          id="password-input"
          className="login__form-input"
          name="password"
          type="password"
          placeholder="Пароль"
          required
        ></input>
        <button class="login__button" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <p className="login__signup">Уже зарегистрированы?<Link to="/sign-in" className="login__link">Войти</Link></p>
    </section>
  );
}

export default Register;
