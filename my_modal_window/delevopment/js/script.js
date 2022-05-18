"use strict";

const btnOpen = document.querySelector('#open');
const btnClose = document.querySelector('#close');
const modalWindow = document.querySelector('#modal');

btnOpen.addEventListener('click', showModal);

function showModal(e) {
    modalWindow.classList.add('modal__show');
}

btnClose.addEventListener('click', hideModal);

function hideModal(e) {
    modalWindow.classList.remove('modal__show');
}  