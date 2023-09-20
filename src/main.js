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
