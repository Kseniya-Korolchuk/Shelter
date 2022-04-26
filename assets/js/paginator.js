import createPetCard from './createPetCard.js';
import Popup from './popup.js';
import pets from '../json/pets.json' assert { type: 'json' };

const petsCardContainer = document.querySelector('.pets-card-container');
const buttonFirst = document.getElementById('first');
const buttonPrev = document.getElementById('prev');
const buttonPage = document.getElementById('page');
const buttonNext = document.getElementById('next');
const buttonLast = document.getElementById('last');

let petCards = [];

function containerSize() {
    const mobile = window.matchMedia('(max-width: 767px)').matches;
    const tablet = window.matchMedia('(min-width: 768px) and (max-width: 1279px)').matches;
  
    if (mobile) {
        return {
            pages: 16,
            cards: 3,
        }
    }
    else if (tablet) {
        return {
            pages: 8,
            cards: 6,
        }
    }
    else {
        return {
            pages: 6,
            cards: 8,
        }
    }
}

const page = containerSize();

const createCards = () => {

    for (let i = 0; i < 6; i++) {
        const arr = [];
        pets.forEach((pet) => {

        const card = createPetCard(
            pet.img,
            pet.name,
            pet.type,
            pet.breed,
            pet.description,
            pet.age,
            pet.inoculations,
            pet.diseases,
            pet.parasites,
            'pet__item'
        );

        arr.push(card);
    });

    function shuffle(a, b) {
        return Math.random() - 0.5;
    }

    if (page.cards == 8) {
      arr.sort(shuffle);
    } 
    else if (page.cards == 6) {
      let block = arr.slice(0, 6).sort(shuffle);
      arr.splice(0, 6, ...block);
    } 
    else if (page.cards == 3) {
      let block = arr.slice(0, 3).sort(shuffle).sort(shuffle);
      arr.splice(0, 3, ...block);
    }

    petCards = petCards.concat(arr);
  }
}

createCards();

petsCardContainer.insertAdjacentHTML('beforeend', [...petCards.slice(0, page.cards)].join(''));

new Popup();

function pagination(arr, blockSize, numOfPages) {
    return arr.slice((numOfPages - 1) * blockSize, numOfPages * blockSize);
}

let count = 1;

function changeClass(btn, currClass, futureClass) {
    if (btn.classList.contains(currClass)) {
        btn.classList.remove(currClass);
        btn.classList.add(futureClass);
    }
}

buttonFirst.addEventListener('click', function(event) {
    if (buttonFirst.classList.contains('enabled')) {
    count = 1;
    const html = pagination(petCards, page.cards, count);
    const template = document.createElement('template');
    template.insertAdjacentHTML('beforeend', [...html].join(''));
    petsCardContainer.replaceChildren(...template.children);
    buttonPage.textContent = count;
    changeClass(buttonFirst, 'enabled', 'disabled');
    changeClass(buttonPrev, 'enabled', 'disabled');
    new Popup();
    }
});

buttonPrev.addEventListener('click', function(event) {
    count--;
    const html = pagination(petCards, page.cards, count);
    const template = document.createElement('template');
    template.insertAdjacentHTML('beforeend', [...html].join(''));
    petsCardContainer.replaceChildren(...template.children);
    buttonPage.textContent = count;
    changeClass(buttonNext, 'disabled', 'enabled');
    changeClass(buttonLast, 'disabled', 'enabled');
    new Popup();
    if (count == 1) {
        changeClass(buttonFirst, 'enabled', 'disabled');
        buttonFirst.setAttribute('disabled', 'disabled');
        changeClass(buttonPrev, 'enabled', 'disabled');
        buttonPrev.setAttribute('disabled','disabled');
        return;
    }
});


buttonNext.addEventListener('click', function(event) {
    if (buttonNext.classList.contains('enabled')) {
        count++;
        const html = pagination(petCards, page.cards, count);
        const template = document.createElement('template');
        template.insertAdjacentHTML('beforeend', [...html].join(''));
        petsCardContainer.replaceChildren(...template.children);
        buttonPage.textContent = count;
        changeClass(buttonFirst, 'disabled', 'enabled');
        buttonFirst.removeAttribute('disabled', 'disabled');
        changeClass(buttonPrev, 'disabled', 'enabled');
        buttonPrev.removeAttribute('disabled', 'disabled');
        if(count == page.pages) {
            changeClass(buttonNext, 'enabled', 'disabled');
            changeClass(buttonLast, 'enabled', 'disabled');
        }
        new Popup();
    }
})

buttonLast.addEventListener('click', function(event) {
    if (buttonNext.classList.contains('enabled')) {
        count = page.pages;
        const html = pagination(petCards, page.cards, count);
        const template = document.createElement('template');
        template.insertAdjacentHTML('beforeend', [...html].join(''))
        petsCardContainer.replaceChildren(...template.children);
        buttonPage.textContent = count;
        changeClass(buttonFirst, 'disabled', 'enabled');
        buttonFirst.removeAttribute('disabled', 'disabled');
        changeClass(buttonPrev, 'disabled', 'enabled');
        buttonPrev.removeAttribute('disabled', 'disabled');
        changeClass(buttonNext, 'enabled', 'disabled');
        changeClass(buttonLast, 'enabled', 'disabled');
        new Popup();
    }
})