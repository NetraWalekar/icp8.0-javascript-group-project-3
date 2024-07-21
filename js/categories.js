function added(no) {
    const btn = document.getElementById(no)
    btn.style.backgroundColor = "green"
}
function plusminus(action)
{
   const quantitytext =document.getElementById("quantity-text")
   let quantity = parseInt(quantitytext.innerText);
   if(quantity==1 && action=='decrement')
   {
    alert('Quantity cannot be less than 1')
    return
   }
   else if (quantity==5 && action =='increment')
   {
     alert('Quantity cannot be greater then 5')
     return
    }
   
   if (action == 'increment'){
    quantitytext.innerText =++quantity;
   }
   else{
    quantitytext.innerText =--quantity;
   }
   
}

function add_cart(num){
    const res = document.getElementById("ac");
    if (res) { // Ensure the element exists
        res.style.visibility = 'visible';
        console.log("Item number " + num + " added to cart."); 
        setTimeout(() => {
        document.getElementById('ac').style.display = 'none';
        }, 2000);
        setTimeout(function(){
          location.reload();
         }, 2000);
       // Example use of num
    } else {
        console.error("Element with id 'ac' not found.");
    }
}
