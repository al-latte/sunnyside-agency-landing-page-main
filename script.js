const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".primary-nav");

hamburger.addEventListener("click", () => {
	mobileNav.classList.toggle("isDisplayed");
});
