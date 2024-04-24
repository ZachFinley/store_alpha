import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ProductPage.css';

function ProductPage({ addToCart }) {
  const sampleProducts = [
    { id: 1, name: 'Apple', category: 'Fruit', price: 1.99 },
    { id: 2, name: 'Banana', category: 'Fruit', price: 0.99 },
    { id: 3, name: 'Orange', category: 'Fruit', price: 2.49 },
    { id: 4, name: 'Grapes', category: 'Fruit', price: 3.99 },
    { id: 5, name: 'Watermelon', category: 'Fruit', price: 5.99 },
    { id: 6, name: 'Strawberry', category: 'Fruit', price: 2.29 },
    { id: 7, name: 'Pineapple', category: 'Fruit', price: 3.79 },
    { id: 8, name: 'Chicken Curry', category: 'Hot Food', price: 7.99 },
    { id: 9, name: 'Spicy Tacos', category: 'Hot Food', price: 5.49 },
    { id: 10, name: 'Chili Con Carne', category: 'Hot Food', price: 6.99 },
    { id: 11, name: 'Pepperoni Pizza', category: 'Hot Food', price: 8.99 },
    { id: 12, name: 'Hot Wings', category: 'Hot Food', price: 9.99 },
    { id: 13, name: 'Spaghetti Bolognese', category: 'Hot Food', price: 7.49 },
    { id: 14, name: 'Beef Stir-Fry', category: 'Hot Food', price: 6.79 },
    { id: 15, name: 'Vanilla Ice Cream', category: 'Ice Cream', price: 3.49 },
    { id: 16, name: 'Chocolate Ice Cream', category: 'Ice Cream', price: 3.49 },
    { id: 17, name: 'Strawberry Ice Cream', category: 'Ice Cream', price: 3.49 },
    { id: 18, name: 'Mint Chocolate Chip Ice Cream', category: 'Ice Cream', price: 3.49 },
];

  return (
    <div className="ProductPage">
      <header className="ProductPage-header">
        <h1>Products</h1>
        <div className="product-list">
          {sampleProducts.map((product) => (
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
