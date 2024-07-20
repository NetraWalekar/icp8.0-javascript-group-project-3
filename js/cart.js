// Sample data (you can replace this with actual dynamic data)
const products = [
    { id: 1, name: "Apples", price: 2.50 },
    { id: 2, name: "Bananas", price: 1.50 },
    { id: 3, name: "Oranges", price: 3.00 }
  ];
  
  // Initialize cart
  let cart = [];
  
  // Function to display cart items
  function displayCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = ''; // Clear previous content
  
    cart.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('cart-item');
      itemDiv.innerHTML = `
        <span>${item.name}</span>
        <input type="number" min="1" value="${item.quantity}" onchange="updateQuantity(${item.id}, this.value)">
        <span>$${(item.price * item.quantity).toFixed(2)}</span>
        <button onclick="removeFromCart(${item.id})">Remove</button>
      `;
      cartDiv.appendChild(itemDiv);
    });
  
    updateCartTotal();
  }
  
  // Function to update total in the cart
  function updateCartTotal() {
    const totalValue = document.getElementById('cart-total-value');
    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    totalValue.textContent = total.toFixed(2);
  }
  
  // Function to add item to cart
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
      const existingItem = cart.find(item => item.id === productId);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
      displayCart();
    }
  }
  
  // Function to remove item from cart
  function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
      cart.splice(index, 1);
      displayCart();
    }
  }
  
  // Function to update quantity in the cart
  function updateQuantity(productId, quantity) {
    const parsedQuantity = parseInt(quantity);
    if (parsedQuantity > 0) {
      const item = cart.find(item => item.id === productId);
      if (item) {
        item.quantity = parsedQuantity;
        displayCart();
      }
    }
  }
  
  // Function to simulate checkout
  function checkout() {
    // Here you can implement the checkout process, e.g., redirect to payment page, clear cart, etc.
    alert('Checkout feature not implemented in this demo.');
  }
  
  // Initial display
  displayCart();
  