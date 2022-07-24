const ulEl = document.querySelectorAll('.item');
const numberOfulEl = ulEl.length;
console.log(`Number of categories: ${numberOfulEl}`);

const mainUl = ulEl.forEach(element => {
  console.log(`Category: ${element.firstElementChild.textContent}`);

  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
