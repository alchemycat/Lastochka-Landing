export default function burgerMenu() {
    const burger = document.querySelector(".burger");
    const contacts = document.querySelector(".header__contacts");
    const wrapper = document.querySelector(".header__wrapper");
    const header = document.querySelector(".header");
    const overlay = document.querySelector(".overlay");
    const phone = document.querySelector(".contacts__phone");

    burger.addEventListener("click", toggleBurger);

    function toggleBurger() {
        const attrValue = JSON.parse(burger.getAttribute("aria-expanded"));

        if (attrValue) {
            burger.classList.add("active");
            contacts.classList.add("active");
            wrapper.classList.add("active");
            header.classList.add("active");
            overlay.classList.add("active");

            phone.classList.remove("contacts__phone-sm")
        } else {
            burger.classList.remove("active");
            contacts.classList.remove("active");
            wrapper.classList.remove("active");
            header.classList.remove("active");
            overlay.classList.remove("active");

            phone.classList.add("contacts__phone-sm")
        }
    }

    toggleBurger();
}
