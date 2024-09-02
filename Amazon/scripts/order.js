import { getCart, clearCart } from './cart.js';

// Function to render the cart data on order.html
function renderOrderSummary() {
    const orderSummaryContainer = document.getElementById('orderSummary');
    const cart = getCart();

    if (!cart || cart.length === 0) {
        orderSummaryContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    orderSummaryContainer.innerHTML = ''; // Clear any existing content

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'order-item';
        itemElement.innerHTML = `
            <p>Product: ${item.productName}</p>
            <p>Price: $${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
        `;
        orderSummaryContainer.appendChild(itemElement);
    });

    // Optionally clear the cart after rendering the order summary
    // clearCart();
}

// Call this function to render the order summary on page load
document.addEventListener('DOMContentLoaded', renderOrderSummary);
