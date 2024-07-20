document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Extract form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;
}