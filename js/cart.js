//cart working js
if (document.readyState == 'loading'){
    document.addEventListener("DOMContentLoaded", ready);
}else{
    ready();
}

//making function
function ready(){
    // remove Items from cart
     var reomveCartButtons = document.getElementByClassName('cart-remove');
     console.log(reomveCartButtons);
     for (var i=0; i < reomveCartButtons.length; i++){
        var button = reomveCartButtons[i]
        button.addEventListener("click", removeCartItem)
     }
    }

     //Quantity Changes
      var quantityInputs = document.getElementsByClassName('cart-quantity');
      for (var i=0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
      }
       /*Add to cart*/
       var addCart = document.getElementsByClassName("add-cart");
       for (var i=0; i < addCart.length; i++){
        var button = addCart[i]
        button.addEventListener("click", addCartClicked);
       }

//Remove Items from cart
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

//Quantity change
function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value =1;
    }
    updatetotal();
}

//Add to cart
 function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shop log(...data: any[]): void lassName("product-title")[0].innerText;
    var price = shop log(...data: any[]): void lassName("price")[0].innerText;
    var productImg = shop log(...data: any[]): void lassName('product-img')[0].src;
    console.log(title, price), productImg;
    console.log(title);
 }

 //update total
 function updatetotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total=0;
    for (var i=0; i < cartBoxes.length; i++){
        var cartBox = cartBox[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$",""));
        var quantity = quantityElement.value;
        total= total + (price * quantity);
        //if price contain some cents value
         total = Math.round(total *100) / 100;

        document.getElementsByClassName('total-price')[0].innerText = "$" + total;

    }
 }