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

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  this.scrollY >= 50
    ? header.classList.add("active-header")
    : header.classList.remove("active-header");
});

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
const featured_swiper = new Swiper(".featured-swiper", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",

  breakpoints: {
    1150: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/*=============== NEW SWIPER ===============*/

let swiperNew1 = new Swiper(".new-swiper-1", {
  loop: true,
  spaceBetween: 16,

  slidesPerView: "auto",

  breakpoints: {
    1150: {
      slidesPerView: 3,
    },
  },
});

let swiperNew2 = new Swiper(".new-swiper-2", {
  loop: true,
  spaceBetween: 16,

  slidesPerView: "auto",

  breakpoints: {
    1150: {
      slidesPerView: 3,
    },
  },
});
/*=============== TESTIMONIAL SWIPER ===============*/

let testimonyNew1 = new Swiper(".testimonial-swiper", {
  loop: true,
  spaceBetween: 16,

  slidesPerView: "auto",

  breakpoints: {
    1150: {
      slidesPerView: 3,
    },
  },
});

/*=============== SHOW SCROLL UP ===============*/

const scrollup = document.querySelector(".up-arrow");

scrollup.addEventListener("click", () => {
  window.scroll(0, 0);
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");
// console.log(sections);
window.addEventListener("scroll", (e) => {
  const scrollDown = window.scrollY;

  sections.forEach((section) => {
    const sectionht = section.offsetHeight;
    const sectiontop = section.offsetTop - 50.67;
    const sectionid = section.getAttribute("id");
    // console.log(sectionid);
    const sectionlink = document.querySelector(
      `.nav-menu a[href*="${sectionid}"]`
    );
    console.log(sectionlink);
    if (scrollDown > sectiontop && scrollDown <= sectiontop + sectionht) {
      sectionlink.classList.add("active-link");
    } else {
      sectionlink.classList.remove("active-link");
    }
  });
});

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
