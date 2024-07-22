// Making items from cart
function ready()
{
    //remove items form cart
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++)
    {
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }
}

//remove items form cart
function removeCartItem(event)
{
    var buttonclicked = event.target;
    buttonclicked.parentElement.remove();
}