import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { openModal, closeModal } from './utils.js';

/* ==== DADOS INICIAIS ==== */

const initialCards = [
    { name: "Vale de Yosemite",        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"    },
    { name: "Lago Louise",             link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg" },
    { name: "Montanhas Carecas",       link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg" },
    { name: "Latemar",                 link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"     },
    { name: "Parque Nacional Vanoise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"     },
    { name: "Lago di Braies",          link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"        },
];


/* ==== SELEÇÃO DE ELEMENTOS - POPUPS ==== */

const popupEditProfile = document.querySelector('#edit-popup');
const popupAddCard = document.querySelector('#new-card-popup');
const popupImage = document.querySelector('#image-popup');


/* ==== SELEÇÃO DE ELEMENTOS - PERFIL ==== */

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileEditButton = document.querySelector('.profile__edit-button');

const popupProfileForm = popupEditProfile.querySelector('#edit-profile-form');
const profileCloseButton = popupEditProfile.querySelector('.popup__close');
const profileNameInput = popupProfileForm.querySelector('.popup__input_type_name');
const profileDescriptionInput = popupProfileForm.querySelector('.popup__input_type_description');
const profileSaveButton = popupProfileForm.querySelector('.popup__button');


/* ==== SELEÇÃO DE ELEMENTOS - CARDS ==== */

const cardsList = document.querySelector('.cards__list');

const cardAddButton = document.querySelector('.profile__add-button');
const cardForm = popupAddCard.querySelector('#new-card-form');
const cardCloseButton = popupAddCard.querySelector('.popup__close');
const cardNameInput = cardForm.querySelector('.popup__input_type_card-name');
const cardLinkInput = cardForm.querySelector('.popup__input_type_url');
const cardCreateButton = cardForm.querySelector('.popup__button');


/* ==== SELEÇÃO DE ELEMENTOS - POPUP DE IMAGEM ==== */

const imagePopupCloseButton = popupImage.querySelector('.popup__close');
const imagePopupImage = popupImage.querySelector('.popup__image');
const imagePopupCaption = popupImage.querySelector('.popup__caption');


/* ==== PERFIL - FUNÇÕES E EVENTOS ==== */

const profileValidator = new FormValidator(popupProfileForm, profileSaveButton);
profileValidator.enableValidation();

function handleOpenEditModal() {
    profileNameInput.value = profileTitle.textContent;
    profileDescriptionInput.value = profileDescription.textContent;
    profileValidator.resetForm();
    openModal(popupEditProfile);
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = profileNameInput.value;
    profileDescription.textContent = profileDescriptionInput.value;
    closeModal(popupEditProfile);
}

profileEditButton.addEventListener('click', handleOpenEditModal);
profileCloseButton.addEventListener('click', () => closeModal(popupEditProfile));
popupProfileForm.addEventListener('submit', handleProfileFormSubmit);


/* ==== CARDS - FUNÇÕES E EVENTOS ==== */

const cardValidator = new FormValidator(cardForm, cardCreateButton);
cardValidator.enableValidation();

function handleImageClick(name, link) {
    imagePopupImage.src = link;
    imagePopupImage.alt = name;
    imagePopupCaption.textContent = name;
    openModal(popupImage);
}

function renderCard(cardData, container) {
    const card = new Card(cardData, '#cards-template', handleImageClick);
    container.prepend(card.getCardElement());
}

function handleAddCardFormSubmit(evt) {
    evt.preventDefault();
    renderCard({ name: cardNameInput.value, link: cardLinkInput.value }, cardsList);
    evt.target.reset();
    closeModal(popupAddCard);
}

cardAddButton.addEventListener('click', () => {
    cardValidator.resetForm();
    openModal(popupAddCard);
});
cardCloseButton.addEventListener('click', () => closeModal(popupAddCard));
cardForm.addEventListener('submit', handleAddCardFormSubmit);


/* ==== POPUP DE IMAGEM - EVENTOS ==== */

imagePopupCloseButton.addEventListener('click', () => closeModal(popupImage));


/* ==== FECHAR POPUP CLICANDO FORA DO CONTEÚDO ==== */

document.querySelectorAll('.popup').forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target === popup) closeModal(popup);
    });
});


/* ==== INICIALIZAÇÃO ==== */

initialCards.forEach((cardData) => renderCard(cardData, cardsList));