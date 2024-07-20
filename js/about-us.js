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
}