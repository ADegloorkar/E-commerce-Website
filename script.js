// Cart Data Structure
let cart = [];

// Function to Add Item to Cart
function addToCart(id, name, price) {
    let item = cart.find((product) => product.id === id);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    updateCartCount();
    displayCart();
}
// Example Product Data
const products = [
    { id: 1, name: "Running Shoes", price: 50, category: "shoes" },
    { id: 2, name: "T-shirt", price: 25, category: "clothes" },
    { id: 3, name: "Novel Book", price: 15, category: "books" },
    { id: 4, name: "Sneakers", price: 60, category: "shoes" },
    { id: 5, name: "Jeans", price: 40, category: "clothes" },
    { id: 6, name: "Science Book", price: 20, category: "books" }
];
// Function to Filter Products by Category
function filterProducts(category) {
    const productContainer = document.getElementById('products');
    productContainer.innerHTML = ''; // Clear existing products

    let filteredProducts = products;

    if (category !== 'all') {
        filteredProducts = products.filter(product => product.category === category);
    }

    // Display filtered products
    filteredProducts.forEach(product => {
        let div = document.createElement('div');
        div.classList.add('product');
        div.innerHTML = `
            <img src="placeholder.jpg" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
        `;
        productContainer.appendChild(div);
    });
}
// Show all products when the page loads
window.onload = () => filterProducts('all');

// Update Cart Count
function updateCartCount() {
    let totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').innerText = totalQuantity;
}

// Display Cart Items
function displayCart() {
    const cartSection = document.getElementById('cart-details');
    const cartItems = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total-amount');
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach((item) => {
        let div = document.createElement('div');
        div.innerHTML = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItems.appendChild(div);
        total += item.price * item.quantity;
    });
    
    totalAmount.innerText = total.toFixed(2);
    cartSection.style.display = cart.length > 0 ? 'block' : 'none';
}
