const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const messageEl = document.getElementById('message');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Simple validation logic
  if (email === 'user@example.com' && password === '123456') {
    messageEl.textContent = '✅ Login successful!';
    messageEl.style.color = 'green';
  } else {
    messageEl.textContent = '❌ Invalid email or password.';
    messageEl.style.color = 'red';
  }

  // Clear input fields
  emailInput.value = '';
  passwordInput.value = '';
});
