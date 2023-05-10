import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Login from "./Login";
import Register from "./Register";
import PageNotFound from "./PageNotFound";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
/* import { Routes, Route, Navigate, NavLink, useNavigate } from 'react-router-dom'; */
import ProtectedRouteElement from "./ProtectedRoute"; // импортируем HOC

function App() {
  /*   const navigate = useNavigate(); */

  //переменные состояния, отвечающие за видимость попапов. Начальное состояние - false
  //т.е они не видны
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: "", link: "" });

  const [loggedIn, setLoggedIn] = useState(false); // loggedIn будет содержать статус пользователя — вошёл он в систему или нет.

  // стейты текушего пользователя, карточек
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  // делаем запрос к серверу и обновляем стейт-переменные из полученного значения
  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cards]) => {
        setCurrentUser(userData);
        setCards(cards);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }, []);

  /*   React.useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }, []); */

  //обработчики видимости попапов
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  // закрытие попапов
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({ name: "", link: "" });
  };

  // обработчик добавления/снятия лайка
  const handleCardLike = (card) => {
    // Проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.log(err));
  };

  // обработчик добавления карточки
  const handleAddPlaceSubmit = ({ name, link }) => {
    api
      .setAdditionCard(name, link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  };

  // обработчик удаления карточки
  const handleCardDelete = (card) => {
    api
      .setDeleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.log(err));
  };

  // обработчик обновления данных о пользователе
  const handleUpdateUser = ({ name, about }) => {
    api
      .setUserInfo(name, about)
      .then((userInfo) => {
        setCurrentUser(userInfo);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  };

  // обработчик обновления аватара
  const handleUpdateAvatar = ({ avatar }) => {
    api
      .setUpdateAvatar(avatar)
      .then((userInfo) => {
        setCurrentUser(userInfo);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        {/*       {loggedIn && <Header />} */}
        <Routes>

          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />

          <Route
            path="/"
            element={
              <ProtectedRouteElement
                element={Main}
                loggedIn={loggedIn}
                cards={cards}
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
              />
            }
          />

        <Route path='*' element={<PageNotFound />} />
        </Routes>

        <Footer />

        {/* попап редактирования профиля */}
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        {/* Попап добавления новой карточки */}
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />

        {/* попап обновления аватара */}
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        {/* попап подтверждения удаления */}
        <PopupWithForm
          name="confirmation"
          title="Вы уверены?"
          buttonText="Да"
        ></PopupWithForm>

        {/* попап открытия картинки с описанием */}
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;