import React from 'react';
import { Button, Table } from 'react-bootstrap';

const Cart = ({ cartItems, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const handleEmptyCart = () => {
    onEmptyCart();
  };

  const renderEmptyCart = () => (
    <p>Your cart is empty. <a href="/products">Add some products</a></p>
  );

  const renderCart = () => (
    <div>
      <p>list of products and their informaiton</p>
    </div>
  );

  return (
    <div>
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? renderEmptyCart() : renderCart()}
    </div>
  );
};

export default Cart;
