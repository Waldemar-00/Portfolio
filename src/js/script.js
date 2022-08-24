const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const close = document.querySelector('.menu__close');

burger.addEventListener('click', () => menu.classList.add('active'));

close.addEventListener('click', () => menu.classList.remove('active'));


const percents = document.querySelectorAll('.percents-span');
const volum = document.querySelectorAll('.volum');

percents.forEach((elemValue, index, array) => {
    volum[index].style.width = elemValue.innerHTML;
});