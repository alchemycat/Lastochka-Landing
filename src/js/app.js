import * as flsFunctions from "./modules/functions.js";
import burgerMenu from "./modules/burger.js";

import Swiper from 'swiper';

document.addEventListener("DOMContentLoaded", () => {
	flsFunctions.isWebp();
	
	burgerMenu();

	const swiper = new Swiper('.swiper', {
		loop: true,
		slidesPerView: 'auto',
		autoplay: {
		  delay: 5000,
		  disableOnInteraction: true
		},
		centeredSlides: true,
	  });

	  const counter = document.querySelector('.interior__counter');

	  function setSwiperCounter() {
		counter.innerHTML = `${swiper.realIndex + 1}/${swiper.slides.length}`;
	  }

	  setSwiperCounter();

	  swiper.on('slideChange', setSwiperCounter);
	  
	  const nextButton = document.querySelector('.swiper-arrow-next');
	  const prevButton = document.querySelector('.swiper-arrow-prev');

	  nextButton.addEventListener('click', nextSlide);
	  prevButton.addEventListener('click', prevSlide);
	  
	  function nextSlide() {
		swiper.slideNext();	
	  }

	  function prevSlide() {
		swiper.slidePrev();
	  }
	  
});