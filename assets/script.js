const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const imageSlide = document.querySelector(".banner-img");
const bannerTitle = document.querySelector("#banner p");
const dotSlide = document.querySelectorAll(".dots .dot");
const nextImageLeftArrow = document.querySelector(".arrow_left");
const nextImageRightArrow = document.querySelector(".arrow_right");

let indexImage = 0;

function displayImageAndTitle() {
  imageSlide.src = `./assets/images/slideshow/${slides[indexImage].image}`;
  bannerTitle.innerHTML = `${slides[indexImage].tagLine}`;
}

function nextDot() {
  for (let i = 0; i < dotSlide.length; i++) {
    if (dotSlide[i].getAttribute("data-clic") - 1 === indexImage) {
      dotSlide[i].classList.add("dot_selected");
    } else {
      dotSlide[i].classList.remove("dot_selected");
    }
  }
}

const nextImageRight = () => {
  if (indexImage < 3) {
    indexImage++;
    displayImageAndTitle();
  } else if (indexImage === 3) {
    indexImage = 0;
    displayImageAndTitle();
  }
  nextDot();
};

const nextImageLeft = () => {
  if (indexImage > 0) {
    indexImage--;
    displayImageAndTitle();
  } else if (indexImage === 0) {
    indexImage = 3;
    displayImageAndTitle();
  }
  nextDot();
};
nextImageLeftArrow.addEventListener("click", nextImageLeft);
nextImageRightArrow.addEventListener("click", nextImageRight);
