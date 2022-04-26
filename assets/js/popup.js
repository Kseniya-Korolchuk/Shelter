export default class Popup {
    popups = document.querySelectorAll('#popup');
    cards = document.querySelectorAll('.card');
    popupBtnsClose = document.querySelectorAll('.popup__button-close');
  
    constructor() {
      this.showPopup();
    }
  
    showPopup() {

      [].forEach.call(this.cards, function (btn) {
        btn.addEventListener('click', function (event) {
          event.currentTarget.lastElementChild.showModal();
          document.body.style.overflow = 'hidden';
        });
      });

      [].forEach.call(this.popups, function (popup) {
        popup.addEventListener('click', (event) => {
          event.stopPropagation();
          if (event.target.id === 'popup') {
            document.querySelector('#popup[open]').close();
            document.body.style.overflow = '';
          }
        });
      });

      [].forEach.call(this.popupBtnsClose, function (popupBtnClose) {
        popupBtnClose.addEventListener('click', (event) => {
          event.stopPropagation();
          document.querySelector('#popup[open]').close();
          document.body.style.overflow = '';
        });
      });
    }
  }
  
  new Popup();