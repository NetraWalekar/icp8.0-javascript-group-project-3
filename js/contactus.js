function msg() {
    var message = document.getElementById('button').value.trim(); 
    if (message =="") {
        alert('Please fill all Information'); 
    } else {
        alert('Thank You for feedback...Message sent...');
    }
}