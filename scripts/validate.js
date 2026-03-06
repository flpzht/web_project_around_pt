/* ==== FUNÇÕES DE MENSAGEM DE ERRO ====*/

const showInputError = (form, input, errorMessage) => {
    input.classList.add('popup__input_type_error');
    const errorElement = form.querySelector(`.${input.id}-input-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
}

const hideInputError = (form, input) => {
    input.classList.remove('popup__input_type_error');
    const errorElement = form.querySelector(`.${input.id}-input-error`);
    errorElement.textContent = '';
    errorElement.classList.remove('popup__input-error_active');
}

/* ==== FUNÇÃO DE CONTROLE DO BOTÃO DE ENVIO ==== */

function toggleButtonState(form, submitButton) {
    submitButton.disabled = !form.checkValidity();
}

function enableValidation(form, submitButton) {
    form.addEventListener('input', (evt) => {
        const input = evt.target;
        const errorElement = form.querySelector(`.${input.id}-input-error`);
        if (!input.validity.valid) {
            showInputError(form, input, errorElement.textContent || input.validationMessage);
        } else {
            hideInputError(form, input);
        }
        toggleButtonState(form, submitButton);
    });
}

/* ==== RESETAR FORMULÁRIOS AO ABRIR O POPUP COM BOTAO DESABILITADO ==== */

function resetFormOpen(form, submitButton) {
    form.reset();
    submitButton.disabled = true;
}