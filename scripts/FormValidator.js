class FormValidator {
    constructor(obj, formElement) {
        this._formElement = formElement;
        this._obj = obj;
    }

    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    }

    _setEventListeners() {
        this._inputList = Array.from(this._formElement.querySelectorAll(this._obj.inputSelector));
        this._buttonElement = this._formElement.querySelector(this._obj.submitButtonSelector);
        this._setEventListeners();
    }
}