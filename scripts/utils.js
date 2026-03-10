/* ==== MANIPULADORES DE EVENTO ==== */

/* ==== FUNÇÕES DE ABERTURA E FECHAMENTO DE POPUP ==== */

function handleEscClose(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened');
        if (openedPopup) {
            closeModal(openedPopup);
        }
    }
}

document.querySelectorAll('.popup').forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target === popup) {
            closeModal(popup);
        }
    });
});


function openModal(modal) {
    modal.classList.add('popup_is-opened');
    document.addEventListener('keydown', handleEscClose);
}

function closeModal(modal) {
    modal.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', handleEscClose);
}

/* ==== RESETAR FORMULÁRIOS AO ABRIR O POPUP COM BOTAO DESABILITADO ==== */

function resetFormOpen(form, submitButton) {
    form.reset();
    submitButton.disabled = true;
}