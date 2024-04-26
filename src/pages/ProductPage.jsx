import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ProductPage.css';

function ProductPage({products, addToCart }) {
  const sampleProducts = [
    
];

  return (
    <div className="ProductPage">
      <header className="ProductPage-header">
        <h1>Products</h1>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              {/* Use addToCart function to add items to the cart */}
              <Button onClick={() => addToCart(product)}>Add to Cart</Button>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default ProductPage;
