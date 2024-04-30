import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import Invoice from '../Components/Invoice';
import '../styles/CheckoutPage.css';

const CheckoutPage = ({ cartItems, total, tax, user}) => {
  
  const [billingAddress, setBillingAddress] = useState({});
  const [shippingAddress, setShippingAddress] = useState({});
  const [paymentMethod, setPaymentMethod] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [showInvoice, setShowInvoice] = useState(false);
  // useEffect(() => {
  //   console.log(user);
  //   if (user) {
  //     setBillingAddress({
  //       billingStreet: user.address.street,
  //       billingCity: user.address.city,
  //       billingState: user.address.state,
  //       billingZip: user.address.zip
  //     });
  //   }
  // }, [user]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // show invoice
    setShowInvoice(true);
  };
  //calculate price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };
  const handleDeliveryMethodChange = (e) => {
    setDeliveryMethod(e.target.value);
  };
  const handleBillingAddressChange = (e) => {
    setBillingAddress({ ...billingAddress, [e.target.name]: e.target.value });
  };
  const handleShippingAddressChange = (e) => {
    setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
  };
  //discount processing
  const [discountCode, setDiscountCode] = useState('');
  const [discount, setDiscount] = useState(0);
  
  const handleDiscountCodeChange = (e) => {
    setDiscountCode(e.target.value);
  };
  
  const applyDiscount = () => {
    //checks if the entered discount code is correct
    if (discountCode === '15OFF') {
      // apply a 15% discount
      //could add more discounts if desired
      const subtotal = calculateTotal();
      const discountAmount = subtotal * 0.15;
      return discountAmount;
    } else {
      //no discount applied if no code
      return 0;
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <div className="receipt">
              <h3>Order Summary</h3>
              <ul className="item-list">
                {cartItems.map((item) => (
                  <li key={item.id} className="item">
                    <div className="item-info">
                      <h4>{item.name}</h4>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: ${item.price.toFixed(2)}</p>
                    </div>
                    <div className="item-subtotal">
                      <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="total">
                <h3>Cart Total: ${calculateTotal()}</h3>
              </div>
          </div> 
      <Form>
        <Form.Group>
          <Form.Label>Payment Method</Form.Label>
          <Form.Control as="select" value={paymentMethod} onChange={handlePaymentMethodChange} required>
            <option value="">Select Payment Method</option>
            <option value="PayPal">PayPal</option>
            <option value="Venmo">Venmo</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Delivery Method</Form.Label>
          <Form.Control as="select" value={deliveryMethod} onChange={handleDeliveryMethodChange} required>
            <option value="">Select Delivery Method</option>
            <option value="United States Postal Service">USPS</option>
            <option value="UPS ">UPS</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Billing Address</Form.Label>
          <Form.Control type="text" placeholder="Street Address" name="billingStreet" onChange={handleBillingAddressChange} required/>
          <Form.Control type="text" placeholder="City" name="billingCity" onChange={handleBillingAddressChange} required/>
          <Form.Control type="text" placeholder="State" name="billingState" onChange={handleBillingAddressChange} required/>
          <Form.Control type="text" placeholder="ZIP Code" name="billingZip" onChange={handleBillingAddressChange} required/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Shipping Address</Form.Label>
          <Form.Control type="text" placeholder="Street Address" name="shippingStreet" onChange={handleShippingAddressChange} required/>
          <Form.Control type="text" placeholder="City" name="shippingCity" onChange={handleShippingAddressChange} required/>
          <Form.Control type="text" placeholder="State" name="shippingState" onChange={handleShippingAddressChange} required/>
          <Form.Control type="text" placeholder="ZIP Code" name="shippingZip" onChange={handleShippingAddressChange} required/>
        </Form.Group>
        <Form.Group>
        <Form.Label>Discount Code</Form.Label>
        <Form.Control type="text" placeholder="Enter discount code" name="discountCode" value={discountCode} onChange={handleDiscountCodeChange} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Checkout
        </Button>
      </Form>

      {showInvoice && (
      <div>
        <Invoice
          cartItems={cartItems}
          total={total || 0} //ensure total is not undefined
          tax={.06} //assumning a 6% tax rate
          discount={applyDiscount().toFixed(2)}
          billingAddress={billingAddress}
          shippingAddress={shippingAddress}
          paymentMethod={paymentMethod}
          deliveryMethod={deliveryMethod}
        />
      </div>
      )}

    </div>
  );
};

export default CheckoutPage;
