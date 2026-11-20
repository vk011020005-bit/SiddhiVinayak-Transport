const hero = document.querySelector(".hero");

const transportImages = [
    "truck1.jpg",
    "truck2.jpg",
    "truck3.jpg",
    "truck4.jpg",
    "truck5.jpg"
];

let currentImage = 0;

function changeBackground() {
    hero.style.backgroundImage =
        `linear-gradient(rgba(11,37,69,0.65), rgba(11,37,69,0.65)),
        url('${transportImages[currentImage]}')`;

    currentImage = (currentImage + 1) % transportImages.length;
}

changeBackground();

setInterval(changeBackground, 4000);
