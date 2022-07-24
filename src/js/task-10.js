// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// // function getRandomRGBColor() {
// //   const red = Math.random(Math.round(0, 1) * 255);

// //   const green = Math.random(Math.round(0, 1) * 255);

// //   const blue = Math.random(Math.round(0, 1) * 255);

// //   return `rgb(${red}, ${green}, ${blue})`;
// // }

// // const refs = {
// //   inputValue: document.querySelector('input'),
// //   btnCreate: document.querySelector('button[data-create]'),
// //   btnDestroy: document.querySelector('button[data-destroy]'),
// //   boxlistHTML: document.querySelector('#boxes'),
// //   boxWrapper: [],
// // };

// // const createBoxes = amount => {
// //   let boxSize = 30;

// //   amount = refs.inputValue.value;
// //   for (let i = 0; i < amount; i += 1) {
// //     let growBox = boxSize + i * 10;
// //     const boxItem = `<div style='width: ${growBox}px, height: ${growBox}px; background-color: ${getRandomHexColor}'></div>`;
// //     refs.boxWrapper.push(boxItem);
// //   }
// //   // return refs.boxWrapper;
// //   refs.boxlistHTML.append(refs.boxWrapper);
// //   // console.log(...refs.boxWrapper);
// // };

// // const destroyBoxes = () => {
// //   refs.boxlistHTML.innerHTML = '';
// //   refs.inputValue.value = '';
// // };
