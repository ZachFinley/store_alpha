import React from 'react';
import '../styles/Invoice.css';

const Invoice = ({ cartItems, total, tax, discount, billingAddress, shippingAddress, paymentMethod, deliveryMethod }) => {
  const calculateSubtotal = () => {
    return cartItems.reduce((subtotal, item) => subtotal + item.price * item.quantity, 0);
  };

  const calculateTax = () => {
    const subtotal = calculateSubtotal();
    const totalTax = subtotal * tax;
    return totalTax.toFixed(2);
  };

  const calculateFinalTotal = () => {
    const subtotal = calculateSubtotal();
    const totalAfterTax = subtotal * (1 + tax);
    const totalAfterDiscount = totalAfterTax - discount;
    return totalAfterDiscount.toFixed(2);
  };
// display invoice on bottom of page
  return (
    <div className="invoice-container">
      <h1>Invoice</h1>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <ul className="item-list">
          {cartItems.map((item) => (
            <li key={item.id} className="item">
              <div className="item-info">
                <h4>{item.name}</h4>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>
        <hr></hr>
        <div className="total">
        <h5>Items Total: ${calculateSubtotal()}</h5>
        <h5>Discount: ${discount}</h5>
        <h5>Tax (6%): ${calculateTax()}</h5>
        <h3>Total: ${calculateFinalTotal()}</h3>
        </div>
      </div >
          <hr></hr>
      <div className="details">
        <br></br>
        <h3>Customer Details</h3>
        <div className="address">
          <h4>Billing Address</h4>
          <p>{billingAddress.billingStreet}</p>
          <p>{billingAddress.billingCity}, {billingAddress.billingState} {billingAddress.billingZip}</p>
        </div>
        <div className="address">
          <h4>Shipping Address</h4>
          <p>{shippingAddress.shippingStreet}</p>
          <p>{shippingAddress.shippingCity}, {shippingAddress.shippingState} {shippingAddress.shippingZip}</p>
        </div>
        <div className="payment-method">
          <h4>Payment Method</h4>
          <p>{paymentMethod}</p>
        </div>
        <div className="delivery-method">
          <h4>Delivery Method</h4>
          <p>{deliveryMethod}</p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
