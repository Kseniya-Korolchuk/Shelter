import pets from '../json/pets.json' assert { type: 'json' }
import createPetCard from './createPetCard.js';

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
    'card'
  )

  sliderCards.insertAdjacentHTML('beforeend', petCard);
})

function findNamesFirstThreeElements() {
  return [
    ...sliderCards.querySelectorAll('.slider__cards > :not(:nth-child(n+4))'),
  ].map((el) => el.querySelector('.card').dataset.name);
}

let namesFirstThreeElements = findNamesFirstThreeElements();

function checkForDuplicates() {
  for (let i = sliderCards.children.length; i >= 0; i--) {
    sliderCards.append(sliderCards.children[(Math.random() * i) | 0]);
  }

  const sliderItems = [...sliderCards.children]

  for (let i = 0; i < namesFirstThreeElements.length; i++) {
    let item = sliderItems[i].querySelector('.card');
    if (namesFirstThreeElements.slice(0, 3).includes(item.dataset.name)) {
      return checkForDuplicates();
    }
  }

  namesFirstThreeElements = findNamesFirstThreeElements();
}

const handlePrev = (event) => {
  checkForDuplicates();
  sliderCards.classList.add('prev');
  setTimeout(() => sliderCards.classList.remove('prev'), 300);
}

const handleNext = (event) => {
  checkForDuplicates();
  sliderCards.classList.add('next');
  setTimeout(() => sliderCards.classList.remove('next'), 300);
}

buttonLeft.addEventListener('click', handlePrev);
buttonRight.addEventListener('click', handleNext);