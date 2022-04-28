const createPetCard = (img, name, type, breed, description, age, inoculations, diseases, parasites , className = '') => { 
    let newCard = `
      <div class="${className}">
        <div class="card" data-name="${name}">
          <img src="${img}" alt="pets-${name.toLowerCase()}" class="img__pet-card">
          <p class="pet-name">${name}</p>
          <button class="button button-primary button-secondary">Learn more</button>
          <dialog id="popup" class="popup">
            <div class="popup__wrapper">
            <button class="button button-arrow popup__button-close">&#10006;</button>
              <img src=${img} alt="pets-${name.toLowerCase()} ">
              <div>
                <h3 class="popup__name">${name}</h3>
                <p class="popup__type">${type} - ${breed}</p>
                <p class="popup__description">${description}</p>
                <ul class="popup__list">
                  <li><b>Age</b>: ${age}</li>
                  <li><b>Inoculations</b>: ${inoculations.join(', ')}</li>
                  <li><b>Diseases</b>: ${diseases.join(', ')}</li>
                  <li><b>Parasites</b>: ${parasites.join(', ')}</li>
                </ul>
              </div>
            </div>
          </dialog>
        </div>
      </div>`
      
    return newCard;
  }
  
  export default createPetCard;