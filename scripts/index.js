import { api } from "./components/Api.js";
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import Section from "./components/Section.js";
import PopupWithForm from "./components/PopupWithForms.js";
import PopupWithImage from "./components/PopupWithImage.js";
import UserInfo from "./components/UserInfo.js";
import PopupWithConfirmation from "./components/PopupWithConfirmation.js";

/* ==== SELEÇÃO DE ELEMENTOS - POPUPS ==== */

const popupEditProfile = document.querySelector("#edit-popup");
const popupAddCard = document.querySelector("#new-card-popup");

/* ==== SELEÇÃO DE ELEMENTOS - PERFIL ==== */

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileEditButton = document.querySelector(".profile__edit-button");

const popupProfileForm = popupEditProfile.querySelector("#edit-profile-form");
const profileNameInput = popupProfileForm.querySelector(".popup__input_type_name");
const profileDescriptionInput = popupProfileForm.querySelector(".popup__input_type_description");
const profileSaveButton = popupProfileForm.querySelector(".popup__button");
const profileImage = document.querySelector(".profile__image");

/* ==== SELEÇÃO DE ELEMENTOS - AVATAR ==== */

const profileAvatarButton = document.querySelector(".profile__avatar-button");
const avatarForm = document.querySelector("#edit-avatar-form");
const avatarSaveButton = avatarForm.querySelector(".popup__button");

/* ==== SELEÇÃO DE ELEMENTOS - CARDS ==== */

const cardAddButton = document.querySelector(".profile__add-button");
const cardForm = popupAddCard.querySelector("#new-card-form");
const cardCreateButton = cardForm.querySelector(".popup__button");

/* ==== USER INFO ==== */

const userInfo = new UserInfo({
  nameElement: profileTitle,
  descriptionElement: profileDescription,
  avatarElement: profileImage,
});

/* ==== VALIDATION ==== */

const profileValidator = new FormValidator(popupProfileForm, profileSaveButton);
profileValidator.enableValidation();

const cardValidator = new FormValidator(cardForm, cardCreateButton);
cardValidator.enableValidation();

const avatarValidator = new FormValidator(avatarForm, avatarSaveButton);
avatarValidator.enableValidation();

/* ==== POPUP DE IMAGEM ==== */

const popupWithImage = new PopupWithImage("#image-popup");
popupWithImage.setEventListeners();

/* ==== POPUP DE CONFIRMAÇÃO ==== */

const popupWithConfirmation = new PopupWithConfirmation("#confirmation-popup");
popupWithConfirmation.setEventListeners();

/* ==== FUNÇÃO CRIAR CARD ==== */

function createCard(cardData) {
  const card = new Card(cardData, "#cards-template", {
    handleImageClick: (name, link) => {
      popupWithImage.open(name, link);
    },
    handleDeleteClick: (cardInstance) => {
      popupWithConfirmation.open(() => {
        api.deleteCard(cardInstance._id)
          .then(() => {
            cardInstance.removeCard();
            popupWithConfirmation.close();
          })
          .catch((err) => console.log(err));
      });
    },
    handleLikeClick: (cardInstance) => {
      const action = cardInstance.isLiked()
        ? api.unlikeCard(cardInstance._id)
        : api.likeCard(cardInstance._id);

      action
        .then((updatedCard) => {
          cardInstance.setLike(updatedCard.isLiked);
        })
        .catch((err) => console.log(err));
    },
  });
  return card.getCardElement();
}

/* ==== SECTION ==== */

const defaultCardList = new Section(
  { items: [], renderer: (cardData) => createCard(cardData) },
  ".cards__list"
);

/* ==== CARREGAMENTO INICIAL ==== */

api.getAppInfo()
  .then(([defaultUserData, defaultCardData]) => {
    userInfo.setUserInfo(defaultUserData);
    defaultCardList.renderItems(defaultCardData);
  })
  .catch((err) => console.log(err));

/* ==== POPUP DE PERFIL ==== */

const profilePopup = new PopupWithForm("#edit-popup", {
  handleFormSubmit: (data) => {
    api.setUserInfo({ name: data.name, about: data.description })
      .then((updatedUser) => {
        userInfo.setUserInfo(updatedUser);
        profilePopup.close();
      })
      .catch((err) => console.log(err));
  },
});
profilePopup.setEventListeners();

profileEditButton.addEventListener("click", () => {
  profileValidator.resetForm();
  const data = userInfo.getUserInfo();
  profileNameInput.value = data.name;
  profileDescriptionInput.value = data.description;
  profilePopup.open();
});

/* ==== POPUP DE AVATAR ==== */

const avatarPopup = new PopupWithForm("#edit-avatar-popup", {
  handleFormSubmit: (data) => {
    api.changeAvatar({ avatar: data["avatar-link"] })
      .then((updatedUser) => {
        userInfo.setUserInfo(updatedUser);
        avatarPopup.close();
      })
      .catch((err) => console.log(err));
  },
});
avatarPopup.setEventListeners();

profileAvatarButton.addEventListener("click", () => {
  avatarPopup.open();
});

/* ==== POPUP DE NOVO CARD ==== */

const cardPopup = new PopupWithForm("#new-card-popup", {
  handleFormSubmit: (data) => {
    api.addCard({ name: data["place-name"], link: data["card-link"] })
      .then((newCard) => {
        const cardElement = createCard(newCard);
        defaultCardList.addItem(cardElement);
        cardPopup.close();
      })
      .catch((err) => console.log(err));
  },
});
cardPopup.setEventListeners();

cardAddButton.addEventListener("click", () => {
  cardValidator.resetForm();
  cardPopup.open();
});