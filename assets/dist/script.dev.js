"use strict";

var slides = [{
  image: "./images/slideshow/slide1.jpg",
  tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
}, {
  image: "./images/slideshow/slide2.jpg",
  tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
}, {
  image: "./images/slideshow/slide3.jpg",
  tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
}, {
  image: "./images/slideshow/slide4.png",
  tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
}];
var arrowRight = document.querySelector(".arrow_right");
var arrowLeft = document.querySelector(".arrow_left");
arrowRight.addEventListener("click", function () {
  console.log("right");
});
arrowLeft.addEventListener("click", function () {
  console.log("left");
}); // ajout de l'image a partir du const slides

var slideshow = document.querySelector(".slideshow");
slides.forEach(function (slides, index) {
  var slide = document.createElement("div");
  slide.classList.add("slide");
  slide.src = slides.image;
  slide.innerHTML = "<p class=\"tagline\">".concat(slides.tagLine, "</p>");
  slideshow.appendChild(slide);

  if (index === 0) {
    slide.classList.add("active");
  }
});