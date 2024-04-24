import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ShoppingPage.css'; 

function ShoppingPage({ cartItems, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) {
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
                <Button size="sm" onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                <Button size="sm" onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                <Button size="sm" variant="danger" onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
              </div>
            </div>
          ))}
        </div>
        <Button variant="secondary" size="sm" onClick={onEmptyCart}>Empty Cart</Button>
      </header>
    </div>
  );
}

export default ShoppingPage;
