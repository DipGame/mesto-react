import { useState, useEffect } from 'react';

import Main from './Main.js';
import Header from './Header.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleCardClick(selectedCard) {
    setSelectedCard(selectedCard);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <>
      <body className="body">
        <div className="page">
          <Header />
          <Main onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleEditPlaceClick} onCardClick={handleCardClick}/>
          <Footer />
          
        </div>
        <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} name='popup' text='Редактировать профиль'>
            <input
              id="popupUserName"
              className="popup__input popup__input_one"
              type="text"
              name="name"
              placeholder="Ваше имя"
              required=""
              minLength={2}
              maxLength={40}
            />
            <span
              className="popup__input-error popupUserName-error"
              id="errorUserName"
            />
            <input
              id="popupProfName"
              className="popup__input popup__input_two"
              type="text"
              name="profession"
              placeholder="Ваша профессия"
              required=""
              minLength={2}
              maxLength={200}
            />
            <span
              className="popup__input-error popupProfName-error"
              id="errorProfName"
            />
          </PopupWithForm>
          <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} name='place' text='Новое место'>
            <input
              id="placeName"
              className="popup__input popup__input_one place__input"
              type="text"
              name="placeName"
              placeholder="Название"
              required=""
              minLength={2}
              maxLength={30}
            />
            <span
              className="popup__input-error placeName-error"
              id="errorPlaceName"
            />
            <input
              id="placeUrl"
              className="popup__input popup__input_two place__input"
              type="url"
              name="placeUrl"
              placeholder="Ссылка на картинку"
              required=""
            />
            <span
              className="popup__input-error placeUrl-error"
              id="errorPlaceUrl"
            />
          </PopupWithForm>
          <PopupWithForm  isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} name='avatar' text='Обновить аватар'>
            <input
              id="avatarUrl"
              className="popup__input avatar__input"
              type="url"
              name="avatarUrl"
              placeholder="Ссылка на картинку"
              required=""
            />
            <span
              className="popup__input-error avatarUrl-error"
              id="errorAvatarUrl"
            />
          </PopupWithForm>
          <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      </body>
      <template className="placeTemplate" id="placeCardTemplate" />
    </>
  );
}

export default App;
