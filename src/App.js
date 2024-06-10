// src/App.js
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

const products = [
  { id: 1, name: 'Fancy Product', description: 'Description of Fancy Product', price: '$40.00 - $80.00' },
  { id: 2, name: 'Special Item', description: 'Description of Special Item', price: '$18.00', oldPrice: '$20.00', sale: true },
  { id: 3, name: 'Sale Item', description: 'Description of Sale Item', price: '$25.00', oldPrice: '$50.00', sale: true },
  { id: 4, name: 'Popular Item', description: 'Description of Popular Item', price: '$40.00' },
  // Add more products as needed
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  return (
    <div className="App">
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">With this shop homepage template</p>
          </div>
        </div>
      </header>
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <ProductList products={products} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
        </div>
      </div>
      <footer className="py-5 bg-dark">
        <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
      </footer>
    </div>
  );
}

export default App;
