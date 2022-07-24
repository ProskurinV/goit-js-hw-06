function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector('.change-color');
const body = document.querySelector('body');
const bgColor = document.querySelector('.color');

const changeColor = () => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  bgColor.textContent = color;
};

btn.addEventListener('click', changeColor);
