// src/components/Cart.js
import React from 'react';

function Cart({ cart, removeFromCart }) {
  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cart.map(product => (
          <div key={product.id}>
            <h4>{product.name}</h4>
            <button onClick={() => removeFromCart(product)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
