/* ==== CLASSE DE VALIDAÇÃO DE FORMULÁRIO ==== */

class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
  }

  _enableValidation() {}
  _showInputError(input, errorMessage) {
    input.classList.add("popup__input_type_error");
    const errorElement = this._formElement.querySelector(`.${input.id}-input-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add("popup__input-error_active");
  }
  _hideInputError(input) {
    input.classList.remove("popup__input_type_error");
    const errorElement = this._formElement.querySelector(`.${input.id}-input-error`);
    errorElement.textContent = "";
    errorElement.classList.remove("popup__input-error_active");
  }
  _toggleButtonState(submitButton) {
    submitButton.disabled = !this._formElement.checkValidity();
  }
    setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    const submitButton = this._formElement.querySelector(this._config.submitButtonSelector);
    this._toggleButtonState(submitButton);
    inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._hideInputError(input);
        this._toggleButtonState(submitButton);
      });
    });
  }
}

export default FormValidator;
