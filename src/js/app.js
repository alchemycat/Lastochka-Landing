import * as flsFunctions from "./modules/functions.js";
import burgerMenu from "./modules/burger.js";
import slider from "./modules/slider.js";
import calc from "./modules/calc.js";
import questions from "./modules/questions.js";
import fancybox from "./modules/fancybox.js"

document.addEventListener("DOMContentLoaded", () => {
	flsFunctions.isWebp();
	
	burgerMenu();

	slider();

	calc();

	questions();

	fancybox();

});