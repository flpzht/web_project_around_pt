import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, { handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._submitButton = this._popup.querySelector('.popup__button-submit');
    }
    _getInputValues() {
        this._inputList = this._form.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    open() {
        super.open();
        this._form.reset();
        this._setEventListeners();
    }

    close() {
        super.close();
        this._form.reset();
        this._setEventListeners();
    }

    _setEventListeners() {
        this._form.addEventListener('submit', (evt) => this._handleFormSubmit(evt));
    }
}