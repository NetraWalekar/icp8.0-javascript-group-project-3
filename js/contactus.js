document.getElementById('contactForm')
function change() {
    alert('Your message has been submitted!')
};
function msg() {
    var message = document.getElementById('message').value.trim(); 
    if (message === "empty") {
        alert('Fill all Information'); 
    } else {
        alert('Message sent');
    }
}