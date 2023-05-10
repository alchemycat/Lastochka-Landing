import * as flsFunctions from "./modules/functions.js";
import burgerMenu from "./modules/burger.js";
import slider from "./modules/slider.js";

document.addEventListener("DOMContentLoaded", () => {
	flsFunctions.isWebp();
	
	burgerMenu();

	slider(); 
});