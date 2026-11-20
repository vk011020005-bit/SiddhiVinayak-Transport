// AUTOMATIC CONTAINER TRUCK SLIDER

const hero = document.querySelector(".hero");

const transportImages = [
    "images/truck1.jpg",
    "images/truck2.jpg",
    "images/truck3.jpg",
    "images/truck4.jpg",
    "images/truck5.jpg"
];

let currentImage = 0;

function changeBackground() {

    hero.style.backgroundImage =
        `linear-gradient(rgba(11,37,69,0.65), rgba(11,37,69,0.65)),
        url('${transportImages[currentImage]}')`;

    currentImage++;

    if (currentImage >= transportImages.length) {
        currentImage = 0;
    }
}

changeBackground();

setInterval(changeBackground, 4000);