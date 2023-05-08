import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const linkRef = React.useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdateAvatar({
      avatar: linkRef.current.value,
    });
  };

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Сохранить"
    >
      <input
        id="avatar-input"
        className="popup__form-input"
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        ref={linkRef}
        required
      />
      <span className="popup__form-input-error avatar-input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
