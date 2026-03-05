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
const cardsTemplate = document.querySelector('#cards-template').content.querySelector('.card');

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

/* ==== FUNÇÕES UTILITÁRIAS - POPUP ==== */

function openModal(modal) {
    modal.classList.add('popup_is-opened');
}

function closeModal(modal) {
    modal.classList.remove('popup_is-opened');
}


/* ==== PERFIL - FUNÇÕES E EVENTOS ==== */

function fillProfileForm() {
    profileNameInput.value = profileTitle.textContent;
    profileDescriptionInput.value = profileDescription.textContent;
}

function handleOpenEditModal() {
    fillProfileForm();
    resetFormOpen(popupProfileForm, profileSaveButton);
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

function getCardElement(name, link) {
    const cardElement = cardsTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const likeButton = cardElement.querySelector('.card__like-button');
    const deleteButton = cardElement.querySelector('.card__delete-button');

    cardImage.src = link;
    cardImage.alt = name;
    cardTitle.textContent = name;

    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('card__like-button_is-active');
    });

    deleteButton.addEventListener('click', () => {
        cardElement.remove();
    });

    cardImage.addEventListener('click', () => {
        imagePopupImage.src = link;
        imagePopupImage.alt = name;
        imagePopupCaption.textContent = name;
        openModal(popupImage);
    });

    return cardElement;
}

function renderCard(name, link, container) {
    const cardElement = getCardElement(name, link);
    container.prepend(cardElement);
}

function handleAddCardFormSubmit(evt) {
    evt.preventDefault();
    const name = cardNameInput.value;
    const link = cardLinkInput.value;
    renderCard(name, link, cardsList);
    evt.target.reset();
    closeModal(popupAddCard);
}

cardAddButton.addEventListener('click', () => openModal(popupAddCard));
cardCloseButton.addEventListener('click', () => closeModal(popupAddCard));
cardForm.addEventListener('submit', handleAddCardFormSubmit);


/* ==== POPUP DE IMAGEM - EVENTOS ==== */

imagePopupCloseButton.addEventListener('click', () => closeModal(popupImage));


/* ==== INICIALIZAÇÃO - RENDERIZAR CARDS ==== */

initialCards.forEach(({ name, link }) => renderCard(name, link, cardsList));


/* ==== FUNÇÕES DE MENSAGEM DE ERRO ====*/

const showInputError = (form, input, errorMessage) => {
    input.classList.add('popup__input_type_error');
    const errorElement = form.querySelector(`.${input.id}-input-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
}

const hideInputError = (form, input) => {
    input.classList.remove('popup__input_type_error');
    const errorElement = form.querySelector(`.${input.id}-input-error`);
    errorElement.textContent = '';
    errorElement.classList.remove('popup__input-error_active');
}
/* ==== FUNÇÕES DE VALIDAÇÃO ==== */

popupProfileForm.addEventListener('input', (evt) => {
    const input = evt.target;

    if (!input.validity.valid) {
        showInputError(popupProfileForm, input, input.validationMessage);
    } else {
        hideInputError(popupProfileForm, input);
    }
    profileSaveButton.disabled = !popupProfileForm.checkValidity();
});

cardForm.addEventListener('input', (evt) => {
    const input = evt.target;
    const errorElement = cardForm.querySelector(`.${input.id}-input-error`);
    if (!input.validity.valid) {
        showInputError(cardForm, input, errorElement.textContent || input.validationMessage);
    } else {
        hideInputError(cardForm, input);
    }
    cardCreateButton.disabled = !cardForm.checkValidity();
});

/* ==== FECHAR POPUP CLICANDO FORA DO CONTEÚDO ==== */

document.querySelectorAll('.popup').forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target === popup) {
            closeModal(popup);
        }
    });
});

/* ==== FECHAR POPUP COM ESC ==== */

document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened');  
        if (openedPopup) {
            closeModal(openedPopup);
        }
    }
});

/* ==== RESETAR FORMULÁRIOS AO ABRIR O POPUP COM BOTAO DESABILITADO ==== */

function resetFormOpen(form, submitButton) {
    form.reset();
    submitButton.disabled = true;
}