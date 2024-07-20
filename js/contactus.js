function msg() {
    var message = document.getElementById('message').value.trim(); 
    if (message =="") {
        alert('Fill all Information'); 
    } else {
        alert('Message sent');
    }
}