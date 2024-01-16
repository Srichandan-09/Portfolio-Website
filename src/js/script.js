// Elements
const header = document.querySelector("#header");
const navBar = document.querySelector(".nav");
const navHeading = document.querySelector(".navHeading");
const menu = document.querySelector(".menu");
const menuIcon = document.querySelector("#menu-icon");
const tabTitles = document.querySelectorAll(".title");
const details = document.querySelectorAll(".detail");

// Sticky navbar
const stickyFunc = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    navBar.classList.remove("sticky");
    navHeading.innerHTML = `<h2 class="navHeading">My Portfolio</h2>`;
  } else {
    navBar.classList.add("sticky");
    navHeading.innerHTML = "";
    menuIcon.style.zIndex = "1";
  }
};

const stickyOptions = {
  root: null,
  threshold: 0.05,
};

const headerObserver = new IntersectionObserver(stickyFunc, stickyOptions);
headerObserver.observe(header);

// Hamburger menu
menuIcon.addEventListener("click", function () {
  menu.classList.toggle("open");
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-xmark");
});

// Info tab in about section
const removeTabAndDetails = function () {
  tabTitles.forEach((title) => title.classList.remove("active-link"));
  details.forEach((detail) => detail.classList.remove("view-details"));
};

tabTitles.forEach((title) => {
  title.addEventListener("click", function (e) {
    removeTabAndDetails();
    e.target.classList.add("active-link");
    const id = e.target.textContent.toLowerCase();
    document.getElementById(id).classList.add("view-details");
  });
});
