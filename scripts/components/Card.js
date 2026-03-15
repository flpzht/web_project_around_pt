export default class Card {
    constructor({ name, link }, templateSelector, { handleImageClick }) {
        this._name = name;
        this._link = link;
        this._templateSelector = templateSelector;
        this._handleImageClick = handleImageClick;
    }

    _getTemplate() {
        return document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true);
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => {
            this._likeButton.classList.toggle('card__like-button_is-active');
        });

        this._deleteButton.addEventListener('click', () => {
            this._cardElement.remove();
        });

        this._cardImage.addEventListener('click', () => {
            this._handleImageClick(this._name, this._link);
        });
    }

    getCardElement() {
        this._cardElement = this._getTemplate();
        this._cardImage = this._cardElement.querySelector('.card__image');
        this._cardTitle = this._cardElement.querySelector('.card__title');
        this._likeButton = this._cardElement.querySelector('.card__like-button');
        this._deleteButton = this._cardElement.querySelector('.card__delete-button');

        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._cardTitle.textContent = this._name;

        this._setEventListeners();

        return this._cardElement;
    }
}