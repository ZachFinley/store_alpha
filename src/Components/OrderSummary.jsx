import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const OrderSummary = ({ cartItems }) => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.06;
  //const shipping = subtotal > 50 ? 0 : 5;
  const total = subtotal + tax/* + shipping*/;

  return (
    <p>checkout stuff</p>
  );
};

export default OrderSummary;
