import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  // подписываемся на контекст CurrentUserContext
  const currentUser = React.useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = `card__button-delete ${
    isOwn && "card__button-delete_active"
  }`;

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `card__button-like ${
    isLiked && "card__button-like_active"
  }`;

  // Обработчик кнопки лайка
  const handleLikeClick = () => {
    onCardLike(card);
  };

  // Обработчик кнопки удаления
  const handleDeleteClick = () => {
    onCardDelete(card);
  };

  const handleClick = () => {
    onCardClick(card);
  };

  return (
    <li className="card">
      <img
        className="card__img"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      ></img>
      <button
        className={cardDeleteButtonClassName}
        type="button"
        aria-label="Удалить"
        onClick={handleDeleteClick}
      ></button>
      <div className="card__inner">
        <h2 className="card__caption">{card.name}</h2>
        <div className="card__like">
          <button
            className={cardLikeButtonClassName}
            type="button"
            aria-label="Лайк"
            onClick={handleLikeClick}
          ></button>
          <p className="card__amount-like">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
