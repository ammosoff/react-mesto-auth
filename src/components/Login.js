import React, { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

function Login({ onLogin, loggedIn }) {
/*   console.log(loggedIn)
  if(loggedIn) {
    <Navigate to="/" replace/>
  } */

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  // обработчик инпутов формы
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  // обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formValue); // здесь обработчик регистрации
  };

  return (
    <section className="login">
      <h2 className="login__title">Вход</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <input
          id="email-input"
          className="login__form-input"
          name="email"
          type="email"
          minLength="6"
          maxLength="40"
          placeholder="Email"
          value={formValue.email || ""}
          required
          onChange={handleChange}
        ></input>
        <input
          id="password-input"
          className="login__form-input"
          name="password"
          type="password"
          minLength="6"
          maxLength="40"
          placeholder="Пароль"
          value={formValue.password || ""}
          required
          onChange={handleChange}
        ></input>
        <button className="login__button" type="submit">
          Войти
        </button>
      </form>
    </section>
  );
}

export default Login;
