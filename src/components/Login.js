import React from "react";

function Login() {
  return (
    <section className="login">
      <h2 className="login__title">Вход</h2>
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
          Войти
        </button>
      </form>
    </section>
  );
}

export default Login;
