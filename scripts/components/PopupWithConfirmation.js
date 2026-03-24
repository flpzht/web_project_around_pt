import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
    this._confirmationButton = this._form.querySelector(".popup__button");
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  open(cardElement) {
    this._cardElement = cardElement;
    super.open();
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
    this._cardElement.remove();
    this.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this._handleFormSubmit);
  }
}
