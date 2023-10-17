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
console.log(imageSlide);
const bannerTitle = document.querySelector("#banner p");
console.log(bannerTitle);
const dotSlide = document.querySelectorAll(".dots .dot");
console.log(dotSlide.length);
const nextImageLeftArrow = document.querySelector(".arrow_left");
const nextImageRightArrow = document.querySelector(".arrow_right");

let indexImage = 0;
const time = 5000;

console.log(slides.length - 1); // 3

const nextImageRight = () => {
  if (indexImage < 3) {
    indexImage++;
    console.log(indexImage);
    console.log("Image vers la gauche");
    imageSlide.src = `./assets/images/slideshow/${slides[indexImage].image}`;
    console.log(imageSlide);
    bannerTitle.innerHTML = `${slides[indexImage].tagLine}`;
  } else if (indexImage === 3) {
    indexImage = 0;
    imageSlide.src = `./assets/images/slideshow/${slides[indexImage].image}`;
    console.log(imageSlide);
    bannerTitle.innerHTML = `${slides[indexImage].tagLine}`;
  }
  for (let i = 0; i < dotSlide.length; i++) {
    if (dotSlide[i].getAttribute("data-clic") - 1 === indexImage) {
      dotSlide[i].classList.add("dot_selected");
    } else {
      dotSlide[i].classList.remove("dot_selected");
    }
  }
};

setInterval(nextImageRight, time);

const nextImageLeft = () => {
  if (indexImage > 0) {
    indexImage--;
    console.log("Image vers la gauche");
    imageSlide.src = `./assets/images/slideshow/${slides[indexImage].image}`;
    bannerTitle.innerHTML = `${slides[indexImage].tagLine}`;
  } else if (indexImage === 0) {
    indexImage = 3;
    imageSlide.src = `./assets/images/slideshow/${slides[indexImage].image}`;
    console.log(imageSlide);
    bannerTitle.innerHTML = `${slides[indexImage].tagLine}`;
  }
  for (let i = 0; i < dotSlide.length; i++) {
    if (dotSlide[i].getAttribute("data-clic") - 1 === indexImage) {
      dotSlide[i].classList.add("dot_selected");
    } else {
      dotSlide[i].classList.remove("dot_selected");
    }
  }
};
nextImageLeftArrow.addEventListener("click", nextImageLeft);
nextImageRightArrow.addEventListener("click", nextImageRight);
