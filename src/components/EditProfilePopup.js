import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  // подписываемся на контекст CurrentUserContext
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]); // в зависимости также добавим пропс isOpen, чтобы устанавливать актуальные значения в инпуты если пользователь изменил значения и не сохранил форму

  // Обработчик изменения инпута обновляет стейт
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  // Обработчик изменения инпута обновляет стейт
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  };

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Сохранить"
    >
      <input
        id="name-input"
        className="popup__form-input"
        type="text"
        name="name"
        minLength="2"
        maxLength="40"
        value={name || ""}
        required
        onChange={handleChangeName}
      />
      <span className="popup__form-input-error name-input-error"></span>
      <input
        id="caption-input"
        className="popup__form-input"
        type="text"
        name="about"
        minLength="2"
        maxLength="200"
        value={description || ""}
        required
        onChange={handleChangeDescription}
      />
      <span className="popup__form-input-error caption-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
