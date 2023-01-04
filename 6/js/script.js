let navMain = document.querySelector('.navigation');
let navToggle = document.querySelector('.navigation__toggle');
let modal = document.querySelector('.modal-container');
let cart = document.querySelector('.catalog__cart');
let modalButton = document.querySelector('.modal__add');
let order = document.querySelector('.promo__order');

navMain.classList.remove('navigation--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('navigation--closed')) {
    navMain.classList.remove('navigation--closed');
    navMain.classList.add('navigation--opened');
  } else {
    navMain.classList.add('navigation--closed');
    navMain.classList.remove('navigation--opened');
  }
});

cart.addEventListener('click', function () {
  if (modal.classList.contains('modal-container--closed')) {
    modal.classList.remove('modal-container--closed');
    modal.classList.add('modal-container--opened');
  }
});

modalButton.addEventListener('click', function () {
  if (modal.classList.contains('modal-container--opened')) {
    modal.classList.remove('modal-container--opened');
    modal.classList.add('modal-container--closed');
  }
});

modal.addEventListener('click', function () {
  if (modal.classList.contains('modal-container--opened')) {
    modal.classList.remove('modal-container--opened');
    modal.classList.add('modal-container--closed');
  }
});

order.addEventListener('click', function () {
  if (modal.classList.contains('modal-container--closed')) {
    modal.classList.remove('modal-container--closed');
    modal.classList.add('modal-container--opened');
  }
});
