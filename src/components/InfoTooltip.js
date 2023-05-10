import React from "react";
import RegistrationSuccess from "../images/registration-success.svg"
import RegistrationFail from "../images/registration-fail.png"

function InfoTooltip(props) {
  return(
    <section
      className={`popup popup_type_registration ${
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
          <img className="popup__img popup__img_type_info" src={RegistrationFail}></img>
          <p className="popup__title popup__title_type_info ">Что-то пошло не так! Попробуйте ещё раз.</p>
      </div>
    </section>
  )
}

export default InfoTooltip;