import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  // Обработчик изменения инпута обновляет стейт
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  // Обработчик изменения инпута обновляет стейт
  const handleChangeLink = (e) => {
    setLink(e.target.value);
  };

  const handleSubmit = (e) => {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onAddPlace({
      name,
      link,
    });
  };

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Создать"
    >
      <input
        id="title-input"
        className="popup__form-input"
        type="text"
        name="name"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        value={name || ""}
        required
        onChange={handleChangeName}
      />
      <span className="popup__form-input-error title-input-error"></span>
      <input
        id="link-input"
        className="popup__form-input"
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        value={link || ""}
        required
        onChange={handleChangeLink}
      />
      <span className="popup__form-input-error link-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
