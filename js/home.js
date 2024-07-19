document.addEventListener("DOMContentLoaded", function() {
    const profileMenu = document.querySelector('.profile-menu');
    const profileDropdown = document.querySelector('.profile-dropdown');

    profileMenu.addEventListener('mouseenter', function() {
        profileDropdown.style.display = 'block';
    });

    profileMenu.addEventListener('mouseleave', function() {
        profileDropdown.style.display = 'none';
    });

    profileDropdown.addEventListener('mouseenter', function() {
        profileDropdown.style.display = 'block';
    });

    profileDropdown.addEventListener('mouseleave', function() {
        profileDropdown.style.display = 'none';
    });
});
