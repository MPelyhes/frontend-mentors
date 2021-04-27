const hamburger = document.querySelector(".menu-hamburger");
const navigation = document.querySelector(".navigation-links");
const closeBtn = document.querySelector(".menu-close");





const mobileMenu = () => {
  hamburger.classList.toggle("hidden");
  navigation.classList.toggle("nav-hidden");
  closeBtn.classList.toggle("hidden");
}

hamburger.addEventListener("click", mobileMenu)
closeBtn.addEventListener("click", mobileMenu);