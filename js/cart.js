let shoppingCart = document.querySelector('.cart');

document.querySelector('#cart-icon').onclick = () =>
{
    shoppingCart.classList.toggle('active');
}