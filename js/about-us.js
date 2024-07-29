document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Extract form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;

    // For demonstration, we'll just log the form data
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Rating: ${rating}`);
    console.log(`Comments: ${comments}`);

     // Show success message
     document.getElementById('successMessage').classList.remove('hidden');

     // Clear the form
     document.getElementById('reviewForm').reset();

});
document.addEventListener("DOMContentLoaded", function() {
    const footerText = document.getElementById('footer-text');
    footerText.style.position = 'relative';
    footerText.style.top = '-5px'; 
});