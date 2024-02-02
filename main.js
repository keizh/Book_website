/*=============== SEARCH ===============*/

const search_btn = document.querySelector(".search-btn");
const search = document.querySelector(".search");
const close_btn = document.querySelector(".form-close-btn");

search_btn.addEventListener("click", () => {
  if (!search.getAttribute("active-search")) {
    search.classList.add("active-search");
  }
});

close_btn.addEventListener("click", () => {
  search.classList.remove("active-search");
});

/*=============== LOGIN ===============*/

const login_btn = document.querySelector(".login-btn");
const login_form = document.querySelector(".login");
const login_close_btn = document.querySelector(".close-btn-block");

login_btn.addEventListener("click", () => {
  if (!login_form.getAttribute("active-login")) {
    login_form.classList.add("active-login");
  }
});

login_close_btn.addEventListener("click", () => {
  login_form.classList.remove("active-login");
});

/*=============== ADD SHADOW HEADER ===============*/

/*=============== HOME SWIPER ===============*/

const swiper = new Swiper(".home-swiper", {
  loop: true,
  spaceBetween: -24,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",

  autoplay: {
    delay: 2000,
    disabledOnInteraction: false,
  },
  breakpoints: {
    1220: {
      spaceBetween: -32,
    },
  },
});

/*=============== FEATURED SWIPER ===============*/

/*=============== NEW SWIPER ===============*/

/*=============== TESTIMONIAL SWIPER ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
