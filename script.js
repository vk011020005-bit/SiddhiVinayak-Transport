const hero = document.querySelector(".hero");

const transportImages = [
    "https://raw.githubusercontent.com/vk011020005-bit/SiddhiVinayak-Transport/main/truck1.jpg",
    "https://raw.githubusercontent.com/vk011020005-bit/SiddhiVinayak-Transport/main/truck2.jpg",
    "https://raw.githubusercontent.com/vk011020005-bit/SiddhiVinayak-Transport/main/truck3.jpg",
    "https://raw.githubusercontent.com/vk011020005-bit/SiddhiVinayak-Transport/main/truck4.jpg",
    "https://raw.githubusercontent.com/vk011020005-bit/SiddhiVinayak-Transport/main/truck5.jpg"
];

let currentImage = 0;

function changeBackground() {
    hero.style.backgroundImage =
        `linear-gradient(rgba(11,37,69,0.40), rgba(11,37,69,0.40)),
        url('${transportImages[currentImage]}')`;

    currentImage = (currentImage + 1) % transportImages.length;
}

changeBackground();

setInterval(changeBackground, 4000);
