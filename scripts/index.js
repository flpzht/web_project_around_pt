const initialCards = [
    {
        name: "Vale de Yosemite",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
    },
    {
        name: "Lago Louise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
    },
    {
        name: "Montanhas Carecas",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
    },
    {
        name: "Parque Nacional Vanoise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
    },
    {
        name: "Lago di Braies",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
    }
];

const popupEditProfile = document.querySelector('#edit-popup');
const popupAddCard = document.querySelector('#new-card-popup');
const popupImage = document.querySelector('#image-popup');

const popupProfileForm = popupEditProfile.querySelector('#edit-profile-form');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description'); 

const profileEditButton = document.querySelector('.profile__edit-button');
const profileCloeButton = popupEditProfile.querySelector('.popup__close');
const profileNameInput = popupProfileForm.querySelector('.popup__input_type_name');
const profileDescriptionInput = popupProfileForm.querySelector('.popup__input_type_description');

const cardAddButton = document.querySelector('.profile__add-button');
const cardCloseButton = popupAddCard.querySelector('.popup__close');
const cardForm = popupAddCard.querySelector('#new-card-form');
const cardNameInput = cardForm.querySelector('.popup__input_type_card-name');
const cardLinkInput = cardForm.querySelector('.popup__input_type_url');

const imagePopupCloseButton = popupImage.querySelector('.popup__close');
const imagePopupImage = popupImage.querySelector('.popup__image');
const imagePopupCaption = popupImage.querySelector('.popup__caption');

const cardsTemplate = document.querySelector('#cards-template').content.querySelector('.card');
const cardsList = document.querySelector('.cards__list');

// Funções para abrir e fechar popups ======= //

function openModal(modal) {
    modal.classList.add('popup_is-opened');
}
function closeModal(modal) {
    modal.classList.remove('popup_is-opened');
}

profileEditButton.addEventListener('click', () => {
    handleOpenEditModal(popupEditProfile);
});
profileCloeButton.addEventListener('click', () => {
    closeModal(popupEditProfile);
});
imagePopupCloseButton.addEventListener('click', () => {
    closeModal(popupImage);
})

function fillProfileForm() {
    profileNameInput.value = profileTitle.textContent;
    profileDescriptionInput.value = profileDescription.textContent;
}

function handleOpenEditModal() {
    fillProfileForm();
    openModal(popupEditProfile);
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = profileNameInput.value;
    profileDescription.textContent = profileDescriptionInput.value;
    closeModal(popupEditProfile);
}
popupProfileForm.addEventListener('submit', handleProfileFormSubmit);

function getCardElement(name = "Lugar sem nome", link = "./images/placeholder.jpg") {
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
initialCards.forEach((item) => {
    renderCard(item.name, item.link, cardsList);
});

cardAddButton.addEventListener('click', () => {
    openModal(popupAddCard);
});
cardCloseButton.addEventListener('click', () => {
    closeModal(popupAddCard);
});
function handleAddCardFormSubmit(evt) {
    evt.preventDefault();
    const name = cardNameInput.value || "Lugar sem nome";
    const link = cardLinkInput.value || "./images/placeholder.jpg";
    renderCard(name, link, cardsList);
    evt.target.reset();
    closeModal(popupAddCard);
}
cardForm.addEventListener('submit', handleAddCardFormSubmit);