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

const cardsTemplate = document.querySelector('#cards-template').content.querySelector('.card');
const cardsList = document.querySelector('.cards__list');

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
        likeButton.classList.toggle('card__like-button_active');
    });
    deleteButton.addEventListener('click', () => {
        cardElement.remove();
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
