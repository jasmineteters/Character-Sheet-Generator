const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const x = document.querySelector('#x');

burger.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    burger.classList.add('hidden');
    x.classList.remove('hidden');
  }
});

x.addEventListener('click', () => {
  if (menu.classList != 'hidden') {
    menu.classList.add('hidden');
    burger.classList.remove('hidden');
    x.classList.add('hidden');
  }
});
