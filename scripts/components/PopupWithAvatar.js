import Popup from "./Popup";

export default class PopupWithAvatar extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._avatarForm = this._popup.querySelector(".popup__form");
    this._avatarInput = this._avatarForm.querySelector(".popup__input");
    this._avatarButton = this._avatarForm.querySelector(".popup__button");
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  setEventListeners() {
    super.setEventListeners();
    this._avatarForm.addEventListener("submit", this._handleFormSubmit);
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
    this._handleFormSubmit(this._avatarInput.value);
  }  
}