/* Общий компонент попапов */

import React from "react";

function PopupWithForm(props) {
  return (
    <section
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_is-opened" : ""
      }`}
    >
      <div className="popup__container">
        <button
          className="popup__button-close"
          type="button"
          aria-label="Закрыть форму"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form
          className="popup__form"
          name={`${props.name}-form`}
          onSubmit={props.onSubmit}
          noValidate
        >
          {props.children}
          <button className="popup__button-save" type="submit">
            {props.buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}
export default PopupWithForm;
