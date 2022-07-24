const refs = {
  inputSize: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

const inputChange = event => {
  text.style.fontSize = `${event.target.value}px`;
};

refs.inputSize.addEventListener('input', inputChange);
