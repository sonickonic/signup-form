const btn = document.querySelector(".btn--submit");
const nameInput = document.querySelector('[aria-label="First Name"]');
const lastInput = document.querySelector('[aria-label="Last Name"]');
const emailInput = document.querySelector('[aria-label="Email Address"]');
const passwordInput = document.querySelector('[aria-label="Password"]');

function isValid(email) {
  let regex = /[^@\s]+@[^@\s]+/;
  let result = email.match(regex);
  if (result) {
    return true;
  }
  return false;
}

const clearValidations = () => {
  const errorStyles = document.querySelectorAll(".form__input--error");
  const errorMessages = document.querySelectorAll(".form__input-msg--error");

  errorStyles.forEach((errorStyle) =>
    errorStyle.classList.remove("form__input--error")
  );

  errorMessages.forEach((errorMessage) => {
    errorMessage.remove();
  });
};

const addValidations = () => {
  [nameInput, lastInput, passwordInput].map((input) =>
    input.value ? null : handleInvalidInput(input)
  );

  isValid(emailInput.value) ? null : handleInvalidInput(emailInput)
};

const handleInvalidInput = (input) => {
  input.classList.add("form__input--error");
  addMsgError(input);
};

const addMsgError = (input) => {

  const form = document.querySelector(".form");
  let msg = document.createElement("p");

  if (input == emailInput) {
    msg.innerHTML = `Looks like this is not an email`;
  }else {
    msg.innerHTML = `${input.placeholder} cannot be empty`;
  }

  msg.classList.add("form__input-msg--error");
  form.insertBefore(msg, input.nextSibling);
};

const validateInput = () => {
  clearValidations();
  addValidations();
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  validateInput();
});
