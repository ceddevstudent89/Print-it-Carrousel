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

// Récupèrer les balises
const imageSlide = document.querySelector(".banner-img");
console.log(imageSlide);
const bannerTitle = document.querySelector("#banner p");
console.log(bannerTitle);
const dotSlide = document.querySelectorAll(".dots .dot");
console.log(dotSlide);
const nextImageLeftArrow = document.querySelector(".arrow_left");
console.log(nextImageLeftArrow);
const nextImageRightArrow = document.querySelector(".arrow_right");
console.log(nextImageRightArrow);

// Variable indexImage qui permettra de changer l'image du carrousel par incrémentation
let indexImage = 0;

// fonction qui permet d'afficher l'image et et le titre :
function displayImageAndTitle() {
  imageSlide.src = `./assets/images/slideshow/${slides[indexImage].image}`;
  bannerTitle.innerHTML = `${slides[indexImage].tagLine}`;
}

// dotSlide est une nodeListe qui commence par 0 et data-clic commence par 1
// donc ajouter -1  à (getAttribute("data-clic") - 1) pour avoir 0
// console.log(dotSlide[0].getAttribute("data-clic") - 1); // 0

/* 
fonction qui permet de faire une boucle (sur les 4 points) et une condition
pour savoir quel point sera selectionné égale l'indexImage.
*/
function nextDot() {
  for (let i = 0; i < dotSlide.length; i++) {
    // SI (data-clic) === (indexImage) Alors le point prends la classe dot-selected
    // Sinon on enlève la classe pour les autres points(dots)
    if (dotSlide[i].getAttribute("data-clic") - 1 === indexImage) {
      // Ajouter la classe dot_selected situé dans le style CSS
      dotSlide[i].classList.add("dot_selected");
    } else {
      // Enlève la classe dot-selected
      dotSlide[i].classList.remove("dot_selected");
    }
  }
}

// fonction qui gère l'image avec une incrémentation positive.
const nextImageRight = () => {
  console.log("J'ai cliqué  sur la flèche droite !");
  // Si indexImage inférieur à 3
  if (indexImage < 3) {
    // Incrémentation de 1
    indexImage++;
    console.log(indexImage);
    // la variable indexImage prends la valeur de 1, puis 2, puis 3
    // Appelle la fonction ddisplayImageAndTitle() qui affiche les images et titres
    displayImageAndTitle();
    // lorsque indexImage = 3 on passe dans le else if
  } else if (indexImage === 3) {
    // si indexImage arrive à la valeur 3
    // On assigne de nouveau 0 à indexImage (car 4 images)
    // reviens donc à la première image
    // Si clique encore à Droite la condition repasse dans le if
    indexImage = 0;
    console.log(indexImage);
    // appel la fonction afficher l'image et le titre
    displayImageAndTitle();
  }
  //appel la fonction nexDot() qui gère les points
  nextDot();
};

// fonction qui gère l'image avec une incrémentation négative.
const nextImageLeft = () => {
  console.log("J'ai cliqué sur la flèche gauche !");
  // Si indexImage supèrieur à 0
  if (indexImage > 0) {
    // Décrémentation de -1
    indexImage--;
    console.log(indexImage);
    // la variable indexImage prends la valeur de 3 puis 2 puis 1
    // Appelle la fonction displayImageAndTitle() qui affiche les images et titres
    displayImageAndTitle();
    // lorsque indexImage = 0 on passe dans le else if
  } else if (indexImage === 0) {
    // si clique sur gauche affiche l'image avec l'indexImage = 3
    // si clique encore à gauche la condition repasse dans le if
    indexImage = 3;
    console.log(indexImage);
    // appel la fonction afficher l'image et le titre
    displayImageAndTitle();
  }
  //appel la fonction nexDot() qui gère les points
  nextDot();
};

/*
 Écouteurs d'évènements qui écoutent aux cliques sur les images flèches
est prends en paramètres les fonctions qui gèrent le changement d'image
soit à droite ou à gauche.
*/
nextImageLeftArrow.addEventListener("click", nextImageLeft);
nextImageRightArrow.addEventListener("click", nextImageRight);
