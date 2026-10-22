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

  if (name.length < 2) {
    nameError.textContent = 'Please enter your name (at least 2 letters).';
    isValid = false;
  }

  if (!email.includes('@') || !email.includes('.')) {
    emailError.textContent = 'Please enter a valid email.';
    isValid = false;
  }


  if (isValid) {
    formStatus.textContent = 'Thank you, ' + name + '! You are subscribed.';
    alert('Thank you, ' + name + '!');
    form.reset();   
  }
});