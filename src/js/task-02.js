const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const potatoEl = document.createElement('li');
potatoEl.classList.add('item');
potatoEl.textContent = 'Potatoes';

const mushroomsEl = document.createElement('li');
mushroomsEl.classList.add('item');
mushroomsEl.textContent = 'Mushrooms';

const garlicEl = document.createElement('li');
garlicEl.classList.add('item');
garlicEl.textContent = 'Garlic';

const tomatosEl = document.createElement('li');
tomatosEl.classList.add('item');
tomatosEl.textContent = 'Tomatos';

const herbsEl = document.createElement('li');
herbsEl.classList.add('item');
herbsEl.textContent = 'Herbs';

const condimentsEl = document.createElement('li');
condimentsEl.classList.add('item');
condimentsEl.textContent = 'Condiments';

const ulEl = document.querySelector('ul');
ulEl.append(potatoEl, mushroomsEl, garlicEl, tomatosEl, herbsEl, condimentsEl);
