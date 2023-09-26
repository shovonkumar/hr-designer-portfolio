// ======= Animation (AOS) Init =======

// AOS.init({
//   duration: 1000,
// });

// ======= Preloader =======

const preloader = document.getElementById("preloader");
window.addEventListener("load", function () {
  this.document.body.style.overflow = "hidden";
  setTimeout(() => {
    preloader.style.display = "none";
    this.document.body.style.overflow = "auto";
    AOS.init({
      duration: 1000,
    });
  }, 1000);
});

// ======= Mobile Nav Menu =======

const menuBtn = document.getElementById("menu-btn");
const menuIcon = document.getElementById("menu-icon");
const menuUl = document.getElementById("menu-ul");
const backdrop = document.getElementById("backdrop");
const navLink = document.querySelectorAll(".nav-link");

function toggleMenu() {
  menuUl.classList.toggle("left-[-100%]");
  menuUl.classList.toggle("left-0");
  menuIcon.classList.toggle("bx-menu");
  menuIcon.classList.toggle("bx-x");
  backdrop.classList.toggle("hidden");
  if (menuUl.classList.contains("left-0")) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }
}

menuBtn.addEventListener("click", toggleMenu);
backdrop.addEventListener("click", toggleMenu);

navLink.forEach((item) => {
  item.addEventListener("click", () => {
    if (menuUl.classList.contains("left-0")) {
      toggleMenu();
    }
  });
});

// ======= Scroll To Top =======

const scrollToTopBtn = document.querySelector("#scrollToTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 250) {
    scrollToTopBtn.classList.remove("hidden");
  } else {
    scrollToTopBtn.classList.add("hidden");
  }
});

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ======= Glightbox Init =======

const lightbox = GLightbox({
  selector: ".glightbox",
});
