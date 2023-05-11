import React from "react";
import RegistrationSuccess from "../images/registration-success.svg";
import RegistrationFail from "../images/registration-fail.png";

function InfoTooltip(props) {
  return (
    <section
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_is-opened" : ""
      }`}
    >
      <div className="popup__container popup__container_type_info">
        <button
          className="popup__button-close"
          type="button"
          aria-label="Закрыть форму"
          onClick={props.onClose}
        ></button>
        <img
          className="popup__img popup__img_type_info"
          src={props.isSuccess ? RegistrationSuccess : RegistrationFail}
        ></img>
        <h2 className="popup__title popup__title_type_info">
          {props.isSuccess ? props.textSuccess : props.textFail}
        </h2>
      </div>
    </section>
  );
}

export default InfoTooltip;
