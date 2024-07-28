
const cartItems = [
    { name: 'Nutty', price: 350, quantity: 1 },
    { name: 'Dark-Fantasy', price: 102, quantity: 2 },
    { name: 'Silk Cadbury', price: 100, quantity: 3 },
    { name: 'Cherry', price: 159, quantity: 1 }
];

function updateOrderSummary() 
{
    const cartList = document.getElementById('cart-items');
    const orderTotalElement = document.getElementById('order-total');
    cartList.innerHTML = '';
    const rs="₹";

    let totalPrice = 0;

    cartItems.forEach(item => {
        const itemElement = document.createElement('li');
        itemElement.textContent = `${item.name} - ${rs} ${item.price} x ${item.quantity}`;
        cartList.appendChild(itemElement);

        totalPrice += item.price * item.quantity;
    });

    orderTotalElement.textContent = `Total Price: ${rs} ${totalPrice.toFixed(2)}`;
}

document.getElementById('back-to-cart-button').addEventListener('click', () => {

    window.location.href = 'cart.html';
});

document.getElementById('place-order-button').addEventListener('click', () => {
    const shippingName = document.getElementById('shipping-name').value;
    const shippingNo = document.getElementById('shipping-no').value;
    const shippingAddress = document.getElementById('shipping-address').value;
    const shippingCity = document.getElementById('shipping-city').value;
    const shippingPinCode = document.getElementById('shipping-pincode').value;

    const billingName = document.getElementById('billing-name').value;
    const billingNo = document.getElementById('billing-no').value;
    const billingAddress = document.getElementById('billing-address').value;
   const billingCity = document.getElementById('billing-city').value;
    const billingPinCode = document.getElementById('billing-pincode').value;

    const paymentMethod = document.getElementById('payment-method').value;
   
    // Example validation and submission logic

    if (shippingName && shippingAddress && shippingCity &&  shippingPinCode &&
    billingName && billing-no && billingAddress && billingCity && billingPinCode && paymentMethod) {
    alert('Your Order has been placed successfully!');
       
    }
    else {
        alert('Please fill in all required details..!');
    }
});

updateOrderSummary();
