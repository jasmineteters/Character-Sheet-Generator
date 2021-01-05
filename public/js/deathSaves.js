const topCircle1 = document.querySelector('#topc1');
const topCircle2 = document.querySelector('#topc1');
const topCircle3 = document.querySelector('#topc1');
const bottomCircle1 = document.querySelector('#bottomc1');
const bottomCircle2 = document.querySelector('#bottomc2');
const bottomCircle3 = document.querySelector('#bottomc3');

topCircle1.addEventListener('click', () => {
  if (topCircle1.classList.contains('bg-green-700')) {
    topCircle1.classList.remove('bg-green-700');
    topCircle1.classList.add('bg-red-700');
  } else {
    topCircle1.classList.add('bg-green-700');
  }
});
topCircle2.addEventListener('click', () => {
  if (topCircle2.classList.contains('bg-green-700')) {
    topCircle2.classList.remove('bg-green-700');
    topCircle2.classList.add('bg-red-700');
  } else {
    topCircle2.classList.add('bg-green-700');
  }
});
topCircle3.addEventListener('click', () => {
  if (topCircle3.classList.contains('bg-green-700')) {
    topCircle3.classList.remove('bg-green-700');
    topCircle3.classList.add('bg-red-700');
  } else {
    topCircle3.classList.add('bg-green-700');
  }
});
bottomCircle1.addEventListener('click', () => {
  if (bottomCircle1.classList.contains('bg-green-700')) {
    bottomCircle1.classList.remove('bg-green-700');
    bottomCircle1.classList.add('bg-red-700');
  } else {
    bottomCircle1.classList.add('bg-green-700');
  }
});
bottomCircle2.addEventListener('click', () => {
  if (bottomCircle2.classList.contains('bg-green-700')) {
    bottomCircle2.classList.remove('bg-green-700');
    bottomCircle2.classList.add('bg-red-700');
  } else {
    bottomCircle2.classList.add('bg-green-700');
  }
});
bottomCircle3.addEventListener('click', () => {
  if (bottomCircle3.classList.contains('bg-green-700')) {
    bottomCircle3.classList.remove('bg-green-700');
    bottomCircle3.classList.add('bg-red-700');
  } else {
    bottomCircle3.classList.add('bg-green-700');
  }
});
