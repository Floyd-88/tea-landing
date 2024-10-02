// Получаем элементы бургер и меню
const burgerWrap = document.querySelector('.burger__wrap');
const fone = document.querySelector('.fone');

const menu = document.querySelector('.menu');
const closeIcon = document.querySelector('.close');

// Открытие/закрытие меню при клике на бургер
burgerWrap.addEventListener('click', function () {
  menu.classList.toggle('active__menu');
  fone.classList.toggle('active__fone');

});

// Закрытие меню при клике на крестик
closeIcon.addEventListener('click', function () {
  menu.classList.remove('active__menu');
  fone.classList.remove('active__fone');

});