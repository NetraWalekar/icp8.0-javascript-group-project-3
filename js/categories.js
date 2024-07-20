function added(no){
    const btn = document.getElementById(no)
    btn.style.backgroundColor="green"
    }

    function plusminus(action) {
        const quantitytext = document.getElementById("quantity-text")
        let quantity = parseInt(quantitytext.innerText);
        if (quantity == 1 && action == 'decrement') {
           alert('Quantity cannot be less than 1')
           return
        }
        else if (quantity == 5 && action == 'increment') {
           alert('Quantity cannot be greater then 5')
           return
        }

        if (action == 'increment') {
           quantitytext.innerText = ++quantity;
        }
        else {
           quantitytext.innerText = --quantity;
        }

     }