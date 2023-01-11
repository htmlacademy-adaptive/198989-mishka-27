let navMain = document.querySelector('.navigation');
let navToggle = document.querySelector('.navigation__toggle');

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

//modal
const modalOpened = 'modal-container--opened';

const orderBtnElement = document.querySelector('.order-js');
const modalElement = document.querySelector('.modal-js');

if (orderBtnElement && modalElement) {
  orderBtnElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalElement.classList.add(modalOpened);
  });

  modalElement.addEventListener('click', (evt) => {
    if (evt.target === modalElement) {
      modalElement.classList.remove(modalOpened);
    }
  });
}

//catalog
const orderBtnElements = document.querySelectorAll('.card-js');

orderBtnElements.forEach((orderBtnElement) => {
  orderBtnElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalElement.classList.add(modalOpened);
  });

  modalElement.addEventListener('click', (evt) => {
    if (evt.target === modalElement) {
      modalElement.classList.remove(modalOpened);
    }
  });
});
