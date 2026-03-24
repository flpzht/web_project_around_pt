import Api from "./components/Api.js";
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import Section from "./components/Section.js";
import PopupWithForm from "./components/PopupWithForms.js";
import PopupWithImage from "./components/PopupWithImage.js";
import UserInfo from "./components/UserInfo.js";

/* ==== DADOS INICIAIS ==== */

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

/* ==== SELEÇÃO DE ELEMENTOS - POPUPS ==== */

const popupEditProfile = document.querySelector("#edit-popup");
const popupAddCard = document.querySelector("#new-card-popup");

/* ==== SELEÇÃO DE ELEMENTOS - PERFIL ==== */

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileEditButton = document.querySelector(".profile__edit-button");

const popupProfileForm = popupEditProfile.querySelector("#edit-profile-form");
const profileNameInput = popupProfileForm.querySelector(".popup__input_type_name",);
const profileDescriptionInput = popupProfileForm.querySelector(".popup__input_type_description",);
const profileSaveButton = popupProfileForm.querySelector(".popup__button");

/* ==== SELEÇÃO DE ELEMENTOS - CARDS ==== */

const cardAddButton = document.querySelector(".profile__add-button");
const cardForm = popupAddCard.querySelector("#new-card-form");
const cardCreateButton = cardForm.querySelector(".popup__button");

/* ==== VALIDATION ==== */

const profileValidator = new FormValidator(popupProfileForm, profileSaveButton);
profileValidator.enableValidation();

const cardValidator = new FormValidator(cardForm, cardCreateButton);
cardValidator.enableValidation();

/*===== DEFAULT CARD LIST =====*/

const defaultCardList = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const card = new Card(cardData, "#cards-template", {
        handleImageClick: (name, link) => {
          popupWithImage.open(name, link);
        },
      });
      return card.getCardElement();
    },
  },
  ".cards__list",
);

defaultCardList.renderItems();

/* ==== POPUP DE IMAGEM - EVENTOS ==== */

const popupWithImage = new PopupWithImage("#image-popup");
popupWithImage.setEventListeners();

/* ==== POPUP DE PERFIL - EVENTOS ==== */

const profilePopup = new PopupWithForm("#edit-popup", {
    handleFormSubmit: (data) => {
        profileTitle.textContent = data.name;
        profileDescription.textContent = data.description;
        profilePopup.close();
    }
});
profilePopup.setEventListeners();

/* ==== POPUP DE NOVO CARD - EVENTOS ==== */

const cardPopup = new PopupWithForm("#new-card-popup", {
    handleFormSubmit: (data) => {
        const card = new Card(
            {
                name: data["place-name"],
                link: data.link
            },
            "#cards-template",
            {
                handleImageClick: (name, link) => {
                    popupWithImage.open(name, link);
                }
            }
        );

        const cardElement = card.getCardElement();
        defaultCardList.addItem(cardElement);

        cardPopup.close();
    }
});
cardPopup.setEventListeners();

/* ==== USER INFO DEFAULT ==== */

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  descriptionSelector: ".profile__description",
});

/* ==== EVENTOS DE ABERTURA DE POPUP ==== */

profileEditButton.addEventListener("click", () => {
    profileValidator.resetForm();
    const userData = userInfo.getUserInfo();
    profileNameInput.value = userData.name;
    profileDescriptionInput.value = userData.description;
    profilePopup.open();
});

cardAddButton.addEventListener("click", () => {
  cardPopup.open();
});