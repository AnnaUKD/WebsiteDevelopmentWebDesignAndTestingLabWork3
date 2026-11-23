function validateName(value) {
  return typeof value === 'string' && value.trim().length >= 2;
}

// Email is valid if it looks like "something@something.something" (no spaces).
function validateEmail(value) {
  if (typeof value !== 'string') {
    return false;
  }
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}


const html = document.querySelector('html');


const fontBtn = document.querySelector('#font-toggle');

fontBtn.addEventListener('click', function () {
  html.classList.toggle('font-alt');
});


const themeBtn = document.querySelector('#theme-toggle');

themeBtn.addEventListener('click', function () {
  html.classList.toggle('light');
});


const likeBtn = document.querySelector('.like-btn');
const likeCount = document.querySelector('.like-count');
let likes = 0;

likeBtn.addEventListener('click', function () {
  likes = likes + 1;
  likeCount.textContent = likes;
  likeBtn.classList.add('liked');
});


const form = document.querySelector('#subscribe-form');
const nameInput = document.querySelector('#sub-name');
const emailInput = document.querySelector('#sub-email');
const nameError = document.querySelector('#sub-name-error');
const emailError = document.querySelector('#sub-email-error');
const formStatus = document.querySelector('.form-status');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  nameError.textContent = '';
  emailError.textContent = '';
  formStatus.textContent = '';

  let isValid = true;

  if (!validateName(name)) {
    nameError.textContent = 'Please enter your name (at least 2 letters).';
    isValid = false;
  }

  if (!validateEmail(email)) {
    emailError.textContent = 'Please enter a valid email.';
    isValid = false;
  }


  if (isValid) {
    formStatus.textContent = 'Thank you, ' + name + '! You are subscribed.';
    alert('Thank you, ' + name + '!');
    form.reset();
  }
});