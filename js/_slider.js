import Swiper from "swiper/bundle";
import 'swiper/css/bundle';

const slider = document.querySelector('.slider-container');
const sliderPagination = document.querySelector('.swiper-pagination');

let mySwiper;

function mobileSlider() {
	if (window.innerWidth <= 600 && slider.dataset.mobile == 'false') {
		mySwiper = new Swiper(slider, {
			slidesPerView: 1,
			spaceBetween: 10,
			loop: true,
			slideClass: 'card',
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
		});

		slider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 600) {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-initialized')) {
			mySwiper.destroy();
      sliderPagination.classList.add('visually-hidden');
		}
	}
}

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
});
