let cartCount = 0;
let cartItems = [];

function addToCart(name, price) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;

    // Add item to cart array
    cartItems.push({ name, price });
    showAlert("Item added to cart!");
    updateCart();
}

function showAlert(message) {
    const alertBox = document.getElementById('alert');
    alertBox.innerText = message;
    alertBox.classList.remove('hidden');

    setTimeout(() => {
        alertBox.classList.add('hidden');
    }, 3000);
}

function toggleCart() {
    const cart = document.getElementById('cart');
    cart.classList.toggle('hidden');
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';

    cartItems.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button>`;
        cartList.appendChild(listItem);
    });
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    cartCount--;
    document.getElementById('cart-count').innerText = cartCount;
    updateCart();
}

function checkout() {
    if (cartItems.length > 0) {
        alert("Checkout functionality is not implemented yet.");
    } else {
        alert("Your cart is empty.");
    }
}

function clearCart() {
    cartItems = [];
    cartCount = 0;
    document.getElementById('cart-count').innerText = cartCount;
    updateCart();
}
