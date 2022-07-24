const refs = {
  input: document.querySelector('#name-input'),
  nameLabel: document.querySelector('#name-output'),
};

const inputValue = event => {
  refs.input = event.currentTarget.value;
  refs.input === ''
    ? (refs.nameLabel.textContent = 'Anonymous')
    : (refs.nameLabel.textContent = event.currentTarget.value);
};

refs.input.addEventListener('input', inputValue);
