let cartIcon = document.querySelector('.cart');

document.querySelector('#cart-icon').onclick = () =>
{
    cartIcon.classList.toggle('.active');
}