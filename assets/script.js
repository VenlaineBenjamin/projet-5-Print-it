const slides = [
    {
        image: "/assets/images/slideshow/slide1.jpg",
        tagLine:
            "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
        image: "/assets/images/slideshow/slide2.jpg",
        tagLine:
            "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
        image: "/assets/images/slideshow/slide3.jpg",
        tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
        image: "/assets/images/slideshow/slide4.png",
        tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
];

const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
let imageBanner = document.querySelector(".banner-img");
imageBanner.src = slides[0].image;
let tagLine = document.querySelector(".tag-line");
tagLine.innerHTML = slides[0].tagLine;
const dots = document.querySelectorAll(".dot");
const dotSelected = document.querySelector(".dot_selected");

// deffilement automatique des images de la bannière et ajout des dots
let i = 0;
setInterval(() => {
    imageBanner.src = slides[i].image;
    tagLine.innerHTML = slides[i].tagLine;
    i++;
    if (i === slides.length) {
        i = 0;
    }
}, 5000);

// ajout des dots sur mes images de la bannière
for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement("div");
    dot.classList.add("dot");
    document.querySelector(".dots").appendChild(dot);
    dot.addEventListener("click", () => {
        imageBanner.src = slides[i].image;
        tagLine.innerHTML = slides[i].tagLine;
    });
}

// lier le dot_selected a l'image affichée
imageBanner.addEventListener("load", () => {
    let dots = document.querySelectorAll(".dot");
    for (let i = 0; i < slides.length; i++) {
        if (imageBanner.src.includes(slides[i].image)) {
            dots[i].classList.add("dot_selected");
        } else {
            dots[i].classList.remove("dot_selected");
        }
    }
});

// flèches de navigation

arrowRight.addEventListener("click", () => {
    i++;
    if (i === slides.length) {
        i = 0;
    }
    imageBanner.src = slides[i].image;
    tagLine.innerHTML = slides[i].tagLine;
});

arrowLeft.addEventListener("click", () => {
    i--;
    if (i < 0) {
        i = slides.length - 1;
    }
    imageBanner.src = slides[i].image;
    tagLine.innerHTML = slides[i].tagLine;
});
