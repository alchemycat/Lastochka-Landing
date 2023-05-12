export default function burgerMenu() {
	try {
		const burger = document.querySelector(".burger");
		const contacts = document.querySelector(".header__contacts");
		const wrapper = document.querySelector(".header__wrapper");
		const header = document.querySelector(".header");
		const overlay = document.querySelector(".overlay");
		const phone = document.querySelector(".contacts__phone");
		const links = document.querySelectorAll(".header__item a");
		const nav = document.querySelector(".header__nav");

		function showMenu() {
			burger.classList.add("active");
			contacts.classList.add("active");
			wrapper.classList.add("active");
			header.classList.add("active");
			overlay.classList.add("active");
			phone.classList.remove("contacts__phone-sm");
		}

		function hideMenu() {
			burger.classList.remove("active");
			contacts.classList.remove("active");
			wrapper.classList.remove("active");
			header.classList.remove("active");
			overlay.classList.remove("active");
			phone.classList.add("contacts__phone-sm");

			if (nav.classList.contains("show")) {
				nav.classList.remove("show");
				burger.setAttribute("aria-expanded", false);
			}
		}

		function toggleBurger() {
			const attrValue = JSON.parse(burger.getAttribute("aria-expanded"));

			if (attrValue) {
				showMenu();
			} else {
				hideMenu();
			}
		}

		links.forEach((link) => {
			link.addEventListener("click", () => {
				hideMenu();
			});
		});

		burger.addEventListener("click", toggleBurger);

		toggleBurger(); //init
	} catch {}
}
