export class FormValidator {
    constructor(form, submitButton) {
        this._form = form;
        this._submitButton = submitButton;
    }

    _showInputError(input) {
        input.classList.add('popup__input_type_error');
        const errorElement = this._form.querySelector(`.${input.id}-input-error`);
        errorElement.textContent = input.validationMessage;
        errorElement.classList.add('popup__input-error_active');
    }

    _hideInputError(input) {
        input.classList.remove('popup__input_type_error');
        const errorElement = this._form.querySelector(`.${input.id}-input-error`);
        errorElement.textContent = '';
        errorElement.classList.remove('popup__input-error_active');
    }

    _toggleButtonState() {
        this._submitButton.disabled = !this._form.checkValidity();
    }

    resetForm() {
        this._form.reset();
        this._submitButton.disabled = true;
    }

    enableValidation() {
        this._form.addEventListener('input', (evt) => {
            const input = evt.target;
            if (!input.validity.valid) {
                this._showInputError(input);
            } else {
                this._hideInputError(input);
            }
            this._toggleButtonState();
        });
    }
}