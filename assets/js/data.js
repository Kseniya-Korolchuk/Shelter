const data = await fetch('../../assets/json/pets.json').then(response => response.json());

export default data;