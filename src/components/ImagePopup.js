import React from "react";

function ImagePopup({ card, onClose }) {
  return (
    <section
      className={`popup popup_type_view-picture ${
        card.link ? "popup_is-opened" : ""
      }`}
      aria-label="Посмотреть изображение"
    >
      <div className="popup__container-picture">
        <button
          className="popup__button-close"
          type="button"
          aria-label="Закрыть форму"
          onClick={onClose}
        ></button>
        <img className="popup__img" src={card.link} alt={card.name} />
        <p className="popup__caption">{card.name}</p>
      </div>
    </section>
  );
}

export default ImagePopup;
