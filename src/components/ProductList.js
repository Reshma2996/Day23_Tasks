// src/components/ProductList.js
import React from 'react';
import Product from './Product';

function ProductList({ products, cart, addToCart, removeFromCart }) {
  return (
    <>
      {products.map(product => (
        <div className="col mb-5" key={product.id}>
          <Product
            product={product}
            inCart={!!cart.find(item => item.id === product.id)}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </div>
      ))}
    </>
  );
}

export default ProductList;
