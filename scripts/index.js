// =================== IMPORTS ===================
import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForms.js';
import UserInfo from './components/UserInfo.js';

// =================== DADOS INICIAIS ===================
const initialCards = [
  { name: "Vale de Yosemite", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg" },
  { name: "Lago Louise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg" },
  { name: "Montanhas Carecas", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg" },
  { name: "Latemar", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg" },
  { name: "Parque Nacional Vanoise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg" },
  { name: "Lago di Braies", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg" },
];

// =================== ELEMENTOS HTML ===================
const profileEditButton = document.querySelector('.profile__edit-button');
const cardAddButton = document.querySelector('.profile__add-button');

const popupEditProfile = document.querySelector('#edit-popup');
const popupAddCard = document.querySelector('#new-card-popup');
const popupImage = document.querySelector('#image-popup');

const profileForm = popupEditProfile.querySelector('.popup__form');
const profileNameInput = profileForm.querySelector('.popup__input_type_name');
const profileDescriptionInput = profileForm.querySelector('.popup__input_type_description');
const profileSaveButton = profileForm.querySelector('.popup__button');

const cardForm = popupAddCard.querySelector('.popup__form');
const cardNameInput = cardForm.querySelector('.popup__input_type_card-name');
const cardLinkInput = cardForm.querySelector('.popup__input_type_url');
const cardCreateButton = cardForm.querySelector('.popup__button');

// =================== USER INFO ===================
const userInfo = new UserInfo({nameSelector: '.profile__title', descriptionSelector: '.profile__description'});

// =================== POPUPS ===================
// Popup de imagem
const popupWithImage = new PopupWithImage('#image-popup');
popupWithImage.setEventListeners();

// Popup de edição de perfil
const popupEditProfileForm = new PopupWithForm('#edit-popup', {
  handleFormSubmit: (data) => {
    // Atualiza informações do usuário
    userInfo.setUserInfo({ name: data.name, description: data.description });
    popupEditProfileForm.close();
  }
});
popupEditProfileForm.setEventListeners();

// Popup de adicionar card
const popupAddCardForm = new PopupWithForm('#new-card-popup', {
  handleFormSubmit: (data) => {
    const newCard = new Card(
      { name: data['place-name'], link: data.link },
      '#cards-template',
      (name, link) => popupWithImage.open(name, link)
    );
    const cardElement = newCard.getCardElement();
    section.addItem(cardElement);
    popupAddCardForm.close();
  }
});
popupAddCardForm.setEventListeners();

// =================== SECTION ===================
const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(
        item,
        '#cards-template',
        (name, link) => popupWithImage.open(name, link)
      );
      const cardElement = card.getCardElement();
      section.addItem(cardElement);
    }
  },
  '.cards__list'
);

// Renderiza os cards iniciais
section.renderer = function () {
  this._items.forEach(item => {
    const card = new Card(item, '#cards-template', (name, link) => popupWithImage.open(name, link));
    const cardElement = card.getCardElement();
    this._container.append(cardElement);
  });
};
section.renderItems();

// =================== EVENT LISTENERS ===================
// Abrir popup de edição de perfil
profileEditButton.addEventListener('click', () => {
  const { name, description } = userInfo.getUserInfo();
  profileNameInput.value = name;
  profileDescriptionInput.value = description;
  popupEditProfileForm.open();
});

// Abrir popup de adicionar card
cardAddButton.addEventListener('click', () => popupAddCardForm.open());

// =================== VALIDAÇÃO DE FORMULÁRIOS ===================
const formValidatorProfile = new FormValidator(profileForm, profileSaveButton);
formValidatorProfile.enableValidation();

const formValidatorCard = new FormValidator(cardForm, cardCreateButton);
formValidatorCard.enableValidation();