import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ShoppingPage.css';

function ShoppingPage({ cartItems, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) {
  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity < 0) {
      newQuantity = 0; // Set quantity to zero if it's less than zero
    }
    onUpdateCartQty(productId, newQuantity);
  };

  return (
    <div className="ShoppingPage">
      <header className="ShoppingPage-header">
        <h1>Shopping Cart</h1>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <div className="cart-item-buttons">
                <Button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</Button>
                <Button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</Button>
                <Button variant="danger" onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
              </div>
            </div>
          ))}
        </div>
        <Button onClick={onEmptyCart}>Empty Cart</Button>
      </header>
    </div>
  );
}

export default ShoppingPage;
