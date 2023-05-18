const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const passwordStrength = document.getElementById('password-strength');
const loginForm = document.getElementById('login-form');

emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);
loginForm.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault();
  const data = {
    email: emailInput.value,
    password: passwordInput.value
  };
  localStorage.setItem('data', JSON.stringify(data));
  alert('Form Submitted Successfully !!!');
}

function validateEmail() {
  const email = emailInput.value;
  if (email === '') {
    emailError.textContent = 'Email is required';
  } else if (!isValidEmail(email)) {
    emailError.textContent = 'Email is not valid';
  } else {
    emailError.textContent = '';
  }
}

function validatePassword() {
  const password = passwordInput.value;
  if (password === '') {
    passwordError.textContent = 'Password is required';
  } else if (password.length < 8) {
    passwordError.textContent = 'Password should be at least 8 characters';
  } else {
    passwordError.textContent = '';
  }

  const strength = calculatePasswordStrength(password);
  passwordStrength.textContent = 'Password Strength: ' + strength;
  passwordStrength.style.color = 'black';
}

function calculatePasswordStrength(password) {
  if (password.length < 5) {
    return 'Weak';
  } else if (password.length < 8) {
    return 'Medium';
  } else {
    return 'Strong';
  }
}