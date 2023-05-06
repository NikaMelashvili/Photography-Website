"use strict";

// DOM content  adn variables

const btn = document.getElementsByClassName("indicator");
const slide = document.getElementById("slide");
const scrolling = document.querySelector(".back-top");
const ham = document.querySelector(".hamburger");
const navigation = document.querySelector(".myLinks");
const bgNav = document.querySelector(".bg-nav");
const burgir = document.querySelector(".cheese-burger");
const commentOne = document.querySelector(".com1");
const commentTwo = document.querySelector(".com2");
const next = document.querySelector(".next");
const previous = document.querySelector(".prev");
const navButtons = document.querySelectorAll("#d-head .myLinks .nav-item");
const darkMode = document.querySelector(".dark-mode");
const logo = document.querySelector(".logo-img");
const instaBack = document.querySelector(".intrduction-right-social");
const bgImg = document.querySelector(".head-section");
const cam1 = document.querySelector(".camm1");
const cam2 = document.querySelector(".camm2");
const cam3 = document.querySelector(".camm3");
const cam4 = document.querySelector(".camm4");
const brands = document.querySelectorAll(".brand-image");
const indicators = document.querySelectorAll(".indicator");
const darkIcon = document.querySelector(".koti");

let count = 0;
let darkModeCounter = 0;

// Functions

function countClicks() {
  count = count + 1;
}

const brandsDark = function () {
  for (let i = 0; i <= brands.length; i++) {
    brands[i].setAttribute("src", "images/dark-mode/" + (i + 1) + ".png");
  }
};
const brandsDarkOff = function () {
  for (let i = 0; i <= brands.length; i++) {
    brands[i].setAttribute("src", "images/clients-light/" + (i + 1) + ".png");
  }
};
// Event listeners

next.addEventListener("click", function () {
  commentOne.style.opacity = "0";
  commentOne.style.visability = "hidden";
  commentOne.style.transition = ".3s ease-out";
  commentTwo.style.opacity = "1";
  commentTwo.style.visability = "visible";
});
previous.addEventListener("click", function () {
  commentTwo.style.opacity = "0";
  commentTwo.style.visability = "hidden";
  commentTwo.style.transition = ".3s ease-out";
  commentOne.style.opacity = "1";
  commentOne.style.visability = "visible";
});
window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    scrolling.classList.add("active");
  } else if (window.scrollY < 500) {
    scrolling.classList.remove("active");
  }
});
btn[0].onclick = function () {
  slide.style.transform = "translateX(0px)";
};
btn[1].onclick = function () {
  slide.style.transform = "translateX(-450px)";
};

ham.addEventListener("click", function () {
  if (count % 2 !== 0) {
    navigation.classList.add("nav-active");
    bgNav.classList.add("nav-active");
    burgir.classList.add("fa-solid", "fa-xmark", "fa-xl");
    burgir.classList.remove("fa", "fa-bars", "fa-xl");
  } else {
    navigation.classList.remove("nav-active");
    bgNav.classList.remove("nav-active");
    burgir.classList.remove("fa-solid", "fa-xmark");
    burgir.classList.add("fa", "fa-bars");
  }
});
navButtons.forEach((element) => {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    countClicks();
    if (count % 2 === 0) {
      bgNav.classList.remove("nav-active");
      navigation.classList.remove("nav-active");
      burgir.classList.remove("fa-solid", "fa-xmark");
      burgir.classList.add("fa", "fa-bars");
    }
  });
});

darkMode.addEventListener("click", function () {
  darkModeCounter++;
  document.body.classList.toggle("dark");
  instaBack.classList.toggle("dark-insta");
  if (darkModeCounter % 2 === 0) {
    logo.setAttribute("src", "images/logo@2x.png");
    cam1.setAttribute("src", "images/icons/camera1-dark.svg");
    cam2.setAttribute("src", "images/icons/travel-dark.svg");
    cam3.setAttribute("src", "images/icons/wedding-dark.svg");
    cam4.setAttribute("src", "images/icons/camera2-dark.svg");
    brandsDarkOff();
    darkMode.style.backgroundColor = "#0a0a0a";
  } else {
    logo.setAttribute("src", "images/dark-mode/logo-dark@2x.png");
    cam1.setAttribute("src", "images/dark-mode/cam2.svg");
    cam2.setAttribute("src", "images/dark-mode/cam1.svg");
    cam3.setAttribute("src", "images/dark-mode/camHeart.svg");
    cam4.setAttribute("src", "images/dark-mode/cam4.svg");
    brandsDark();
    darkMode.style.backgroundColor = "white";
  }
});
