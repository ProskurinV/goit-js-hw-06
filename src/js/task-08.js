const form = document.querySelector('.login-form');

const onFormSubmit = event => {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  if (formElements.email.value === '' || formElements.password.value === '') {
    return alert('Все поля должны быть заполнены');
  } else console.log({ email: formElements.email.value, password: formElements.password.value });
  event.currentTarget.reset();
};

form.addEventListener('submit', onFormSubmit);
