import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'feedback-form-state';

// Запись данных в локальное хранилище
const saveState = throttle(() => {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}, 500);

// Загрузка данных из локального хранилища
const loadState = () => {
  const state = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (state) {
    emailInput.value = state.email;
    messageInput.value = state.message;
  }
};

const handleInput = () => {
  saveState();
};

// отправка формы
const handleSubmit = (event) => {
  event.preventDefault();

  const state = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(state);

  localStorage.removeItem(STORAGE_KEY);
  emailInput.value = '';
  messageInput.value = '';
};

form.addEventListener('submit', handleSubmit);
emailInput.addEventListener('input', handleInput);
messageInput.addEventListener('input', handleInput);

// Проверка состояние хранилища при загрузке страницы
loadState();