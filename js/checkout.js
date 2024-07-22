
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

    let totalPrice = 0;

    cartItems.forEach(item => {
       
    
}