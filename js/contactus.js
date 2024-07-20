function msg() {
    var message = document.getElementById('message').value.trim(); 
    if (message === "empty") {
        alert('Fill all Information'); 
    } else {
        alert('Message sent');
    }
}