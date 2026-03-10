class Card {
    constructor({name, link}, templateSelector) {
        this._name = name;
        this._link = link;
        this._templateSelector = templateSelector;
    };
    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);
            
        return cardElement;
    }
    _handleLikeClick() {
        this._likeButton.classList.toggle('card__like-button_is-active');
    }
    _handleDeleteClick() {
        this._cardElement.remove();
    }
    _handleImageClick() {
        // Lógica para abrir a imagem em um modal
        imagePopupImage.src = this._link;
        imagePopupImage.alt = this._name;
        imagePopupCaption.textContent = this._name;
        openModal(this._popupImage);
    }
    _setEventListeners() {
        this._likeButton.addEventListener('click', () => this._handleLikeClick());
        this._deleteButton.addEventListener('click', () => this._handleDeleteClick());
        this._cardImage.addEventListener('click', () => this._handleImageClick());
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

export default Card;