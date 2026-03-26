import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  open(handleConfirm) {
    this._handleConfirm = handleConfirm;
    super.open();
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
    this._handleConfirm();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this._handleFormSubmit);
  }
}