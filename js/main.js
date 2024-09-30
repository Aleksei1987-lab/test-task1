import './_profile-items-icons';
import './_timer';
import './_offers';
import './_slider';

const burgerEl = document.querySelector('.burger');
const headerMenu = document.querySelector('.header_menu');

if(burgerEl) {
  const body = document.body;
  burgerEl.addEventListener('click', () => {
    burgerEl.classList.add('burger--active');
    body.classList.add("stop-scroll");
    headerMenu.classList.add('show-menu')
  })
}



