const header = document.querySelector(".header");
const menuHamburger = document.querySelector(".menu-hamburger");
const navMenu = header.querySelector(".menu");
const navSubMenus = navMenu.querySelectorAll(".submenu");

menuHamburger.addEventListener("click", (e) => {
  e.preventDefault();
  menuHamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navSubMenus.forEach((subMenu) => {
  subMenu.addEventListener("click", () => {
    let innerMenu = subMenu.querySelector("ul");

    // remove all sub menu active class
    [...navSubMenus].map((menu) =>
      menu.querySelector("ul").classList.remove("active")
    );

    innerMenu.classList.add("active");
  });
});

function scrollNavbar() {
  var sticky = header.offsetTop;

  if (window.pageYOffset > sticky || window.innerWidth < 992) {
    header.classList.add("header-sticky");
  } else {
    header.classList.remove("header-sticky");
  }
}

scrollNavbar();

window.onscroll = scrollNavbar;
window.onresize = scrollNavbar;

const counterUp = document.querySelectorAll(".count-item");

counterUp.forEach((countItem) => {
  let counter = countItem.querySelector("strong");
  let countText = counter.innerText;

  let numAnim = new countUp.CountUp(counter, +countText);
  numAnim.start();
});
