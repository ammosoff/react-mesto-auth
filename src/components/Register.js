import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Register({ onRegistration }) {
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  })

  // обработчик инпутов формы
  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  // обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    onRegistration(formValue);// здесь обработчик регистрации
  }


  return (
    <section className="login">
      <h2 className="login__title">Регистрация</h2>
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
          Зарегистрироваться
        </button>
      </form>
      <p className="login__signup">Уже зарегистрированы?<Link to="/sign-in" className="login__link">Войти</Link></p>
    </section>
  );
}

export default Register;
