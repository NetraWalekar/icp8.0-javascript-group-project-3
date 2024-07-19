
const profileIcon = document.getElementById('profile-icon');
const profileText = document.getElementById('profile-text');

profileIcon.addEventListener('mouseover', () => {
    profileText.style.display = 'User Account';
});

profileIcon.addEventListener('mouseout', () => {
    profileText.style.display = 'none';
});


const cartIcon = document.getElementById('cart-icon');
const cartText = document.getElementById('cart-text');

cartIcon.addEventListener('mouseover', () => {
    cartText.style.display = 'block';
});

cartIcon.addEventListener('mouseout', () => {
    cartText.style.display = 'none';
});
