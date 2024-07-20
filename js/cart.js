let cartIcon = document.querySelector("#categories");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
// open cart
categories.onclick = () => {
    cart.classList.add("active");
};
//close cart
closeCart.onclick = () => {
    cart.classList.remove("active");
};