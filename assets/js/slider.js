import createPetCard from './createPetCard.js';
import pets from '../json/pets.json' assert { type: 'json' };


const sliderCards = document.querySelector('.slider__cards');
const buttonLeft = document.querySelector('.slider__button-left');
const buttonRight = document.querySelector('.slider__button-right');

pets.forEach((pet) => {
  const petCard = createPetCard(
    pet.img,
    pet.name,
    pet.type,
    pet.breed,
    pet.description,
    pet.age,
    pet.inoculations,
    pet.diseases,
    pet.parasites,
    'slider__item'
  );

  sliderCards.insertAdjacentHTML('beforeend', petCard);
});

const showPrevious = (event) => {
  checkDuplicates();
  sliderCards.classList.add('previous');
  setTimeout(() => sliderCards.classList.remove('previous'), 800);
}

const showNext = (event) => {
  checkDuplicates();
  sliderCards.classList.add('next');
  setTimeout(() => sliderCards.classList.remove('next'), 800);
}

buttonLeft.addEventListener('click', showPrevious);
buttonRight.addEventListener('click', showNext);

function getFirstNames() {
  return [...sliderCards.querySelectorAll('.slider__cards > :not(:nth-child(n+4))')].map((el) => el.querySelector('.card').dataset.name);
}

let firstNames = getFirstNames();

function checkDuplicates() {
  for (let i = sliderCards.children.length; i >= 0; i--) {
    sliderCards.append(sliderCards.children[(Math.random() * i) | 0]);
  }

  const sliderItems = [...sliderCards.children];

  for (let i = 0; i < firstNames.length; i++) {
    let item = sliderItems[i].querySelector('.card');
    if (firstNames.slice(0, 3).includes(item.dataset.name)) {
      return checkDuplicates();
    }
  }

  firstNames = getFirstNames();
}