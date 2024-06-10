// src/components/Product.js
import React from 'react';

function Product({ product, inCart, addToCart, removeFromCart }) {
  return (
    <div className="card h-100">
      {product.sale && <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>}
      <img className="card-img-top" src="https://via.placeholder.com/450x300" alt={product.name} />
      <div className="card-body p-4">
        <div className="text-center">
          <h5 className="fw-bolder">{product.name}</h5>
          {product.oldPrice && <span className="text-muted text-decoration-line-through">{product.oldPrice}</span>}
          {product.price}
        </div>
      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          {inCart ? (
            <button className="btn btn-outline-dark mt-auto" onClick={() => removeFromCart(product)}>Remove from Cart</button>
          ) : (
            <button className="btn btn-outline-dark mt-auto" onClick={() => addToCart(product)}>Add to Cart</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
