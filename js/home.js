setTimeout(function(){

let loader=document.getElementById('loader')
let mainContent=document.getElementById('main-content')
loader.style.display="none";
mainContent.style.display="block";
},4000)

let images = [
    "./images/icons/home-logo/head-img.jpg",
   
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

const greetings = [
   "Welcome to Nature's Basket! Fresh finds await you!",
    "Hi there! Enjoy our fresh selections! ",
    "Welcome back! Let’s fill your basket with goodness!",
    "Hello! Discover deliciousness at Nature's Basket!",
    "Hey there! Fresh, healthy, and delightful options await!"
];

function displayGreeting() {
    const greetingText = document.getElementById('greeting-text');
    const randomIndex = Math.floor(Math.random() * greetings.length);
    greetingText.textContent = greetings[randomIndex];
}


document.addEventListener("DOMContentLoaded", () => {
    displayGreeting();
    showImage(currentIndex); 
});
