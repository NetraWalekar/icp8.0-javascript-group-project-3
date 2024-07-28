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
function hide(){
    if(window.innerWidth<951){
    const hide = document.getElementById("logo")
    hide.style.visibility="hidden";
    }
}
function display_menu(){
    if(window.innerWidth<951){
    const menu = document.getElementById("side-bar")
    menu.style.visibility="visible";
    if(menu.style.visibility=="visible"){
       hide();
    }
    const dis_menu = document.getElementById("menu_left")
    dis_menu.style.visibility="visible";
}
}
 function hide_again(){
    if(window.innerWidth<951){
    const menu1 = document.getElementById("side-bar")
    menu1.style.visibility="hidden"
    const dis_menu1 = document.getElementById("menu_left")
    dis_menu1.style.visibility="hidden";
    const logo_dis = document.getElementById("logo")
    logo_dis.style.visibility="visible";
    }
 }
 
 if(window.innerWidth>951){
    const side = document.getElementById("side-bar")
    side.style.visibility="hidden";
    if(window.innerWidth>951){
        const a = document.getElementById("menu")
        a.style.visibility="hidden";
        a.style.display="none";
    }
    else{
        a.style.visibility="visible";
    }
 }
   if(window.innerWidth<951){
    const b = document.getElementById("menu")
    b.style.visibility="visible";
   }