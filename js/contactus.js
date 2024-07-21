function msg() {
    var message = document.getElementById('message').value.trim(); 
    if (message =="") {
        alert('Fill all Information'); 
    } else {
        alert('Message sent');
    }
}
function map(){
    var map = document.getElementById('map');
    alert('If you want to see in large size please click on view larger map at left top corner of map');
}