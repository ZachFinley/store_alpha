import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Invoice.css';
import React from 'react';
import { Table, Button } from 'react-bootstrap';

const Invoice = ({ cartItems, total, tax, discount }) => {
  const finalTotal = total + tax - discount;

  return (
    <div>
      <h1>Invoice</h1>
      
    </div>
  );
};

export default Invoice;
