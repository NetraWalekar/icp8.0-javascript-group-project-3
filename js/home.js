let images = [
    "./images/icons/home-logo/head-img.jpg",
    "./images/icons/home-logo/img5.jpg",
    "./images/icons/home-logo/img6.jpeg",
    "./images/icons/home-logo/img7.jpeg"
];

let imgIndex = 0;

function showImage(index) {
    const imgElement = document.getElementById('head-img');
    imgElement.src = images[index];
}

function prev() {
    if (imgIndex === 0) {
        imgIndex = images.length - 1;
    } else {
        imgIndex--;
    }
    showImage(imgIndex);
}

function next() {
    if (imgIndex === images.length - 1) {
        imgIndex = 0;
    } else {
        imgIndex++;
    }
    showImage(imgIndex);
}

document.addEventListener("DOMContentLoaded", () => {
    showImage(imgIndex);
});
