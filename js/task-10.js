// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//   }
//   function getRandomRgbColor() {
//     const red = Math.round(Math.random(0, 1) * 255);
//     const green = Math.round(Math.random(0, 1) * 255);
//     const blue = Math.round(Math.random(0, 1) * 255);
//     return `rgb(${red},${green},${blue})`;
//   }
//   const ref = {
//     inputValue: document.querySelector('#controls>input'),
//     btnCreate: document.querySelector('[data-create]'),
//     btnDestroy: document.querySelector('[data-destroy]'),
//     boxListHTML:  document.querySelector('#boxes'),
//   };
//   const createBoxes = (amount) => {
//     const boxWrap = [];
//   amount = ref.inputValue.value;
//   for (let i = 0; i < amount; i += 1 ){
//     const boxSize = 30;
//     let growBox = boxSize + i * 10;
//     const boxItem = `<div style ='width:${growBox}px ;height:${growBox}px; background-color:${getRandomRgbColor()}'></div>`
//     boxWrap.push(boxItem);
//   ref.boxListHTML.insertAdjacentHTML('afterbegin', boxWrap.join(''));
//   }
//   const destroyBoxes =() =>{
//     ref.boxListHTML.innerHTML="";
//     ref.inputValue.value = "";
//   };
//   ref.btnCreate.addEventListener('click', createBoxes );
//   ref.btnDestroy.addEventListener('click', destroyBoxes );

const inputNum = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = amount => {
  const elementsToAdd = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    elementsToAdd.push(div);
  }
  return elementsToAdd;
};

const destroyBoxes = () => {
  boxes.innerHTML = '';
};

btnCreate.addEventListener('click', () => {
  let boxesToAdd = createBoxes(inputNum.value);
  boxes.append(...boxesToAdd);
});

console.log(inputNum.value);

btnDestroy.addEventListener('click', () => {
  destroyBoxes.call();
});
