const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const hamburgerIcon = document.querySelector(".icon-hamburger");
const closeIcon = document.querySelector(".icon-close");
const large = window.innerWidth >= 800;
const small = window.innerWidth < 800;

const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: false,
  dots: small,
  swipe: true,
  arrows: false,
  // autoplay: true,
  // autoplaySpeed: 2000,
});

// navToggle.addEventListener("click", () => {
//   primaryNav.hasAttribute("data-visible")
//     ? navToggle.setAttribute("aria-expanded", false)
//     : navToggle.setAttribute("aria-expanded", true);
//   primaryNav.toggleAttribute("data-visible");
//   primaryHeader.toggleAttribute("data-overlay");
// });

navToggle.addEventListener("click", () => {
  if (primaryNav.hasAttribute("data-visible")) {
    navToggle.setAttribute("aria-expanded", false);
    hamburgerIcon.style.display = "block";
    closeIcon.style.display = "none";
  } else {
    navToggle.setAttribute("aria-expanded", true);
    hamburgerIcon.style.display = "none";
    closeIcon.style.display = "block";
  }
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});
