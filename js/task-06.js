const inputEl = document.querySelector('#validation-input');
const inputValue = inputEl.dataset.length;

const inputValid = event => {
  if (event.currentTarget.value.length === Number(inputValue)) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
};
inputEl.addEventListener('blur', inputValid);
