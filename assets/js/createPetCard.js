const createPetCard = (
    img = '',
    name  = '',
    type  = '',
    breed  = '',
    description  = '',
    age  = '',
    inoculations  = '',
    diseases  = '',
    parasites  = '',
    className = ''
  ) => {
    return `
      <div class="${className}">
        <div class="card" data-name="${name}">
          <img src="${img}" alt="pets-${name.toLowerCase()}" class="img__pet-card">
          <p class="pet-name">${name}</p>
          <button class="button button-primary button-secondary">Learn more</button>
          <dialog id="modal" class="modal">
            <div class="modal__wrapper">
              <img src=${img} alt="pets-${name.toLowerCase()}">
              <div>
                <h2 class="modal__name">${name}</h2>
                <p class="modal__type">${type} - ${breed}
                <p>
                <p class="modal__description">${description}</p>
                <ul class="modal__list">
                  <li>
                    <b>Age</b>: ${age}
                  </li>
                  <li>
                    <b>Inoculations</b>: ${inoculations.join(', ')}
                  </li>
                  <li>
                    <b>Diseases</b>: ${diseases.join(', ')}
                  </li>
                  <li>
                    <b>Parasites</b>: ${parasites.join(', ')}
                  </li>
                </ul>
              </div>
              <button class="button button-arrow modal__btn--close">
                <img src="../../assets/icons/modal_close_button.svg" alt="modal_close_button">
              </button>
            </div>
          </dialog>
        </div>
      </div>
    `
  }
  
  export default createPetCard;