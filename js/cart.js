//cart working js
if (document.readyState == 'loading'){
    document.addEventListener("DOMContentLoaded", ready);
}else{
    ready();
}

//making function
function ready(){
    // remove Items from cart
     var reomveCartButtons = document.getElementByClassName('cart-remove')
     console.log(reomveCartButtons)
     for (var i = 0; i < reomveCartButtons.length; i++){
        var button = reomveCartButtons[i]
        button.addEventListener("click", removeCartItem)
     }
     var quantityInputs = document.getElementsByClassName('cart-quantity')
     for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener('change',quantityChanged);
     }
    }

//Remove Items from cart
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

//quantity change 
function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updatetotal();
}


//update total
function updatetotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    for (var i = 0; i < cartBoxes.length; i++){
        var cartBoxes = cartBoxes[i];
        var priceElement = cartBox.getElementByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementByClassName('cart-quantity')[0];
        var quantity = quantityElement.value;
        var price = parseFloat(priceElement.innerText.replace("₹", ""));
        total= total + (price * quantity);


        document.getElementsByClassName('tota;-price')[0].innerText = "₹" + total;
    }
}