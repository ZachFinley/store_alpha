import React, { useState } from 'react';
import '../styles/CustomerPanel.css';

const CustomerPanel = ({shoppers, onCustomerUpdate}) => {
  const [selectedShopperId, setSelectedShopperId] = useState('');
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectShopper = (e) => {
    const shopperId = e.target.value;
    setSelectedShopperId(shopperId);
    const shopper = shoppers.find(shopper => shopper.customerID === shopperId);
    if (shopper) {
      setCustomer({
        name: shopper.name,
        email: shopper.email,
        street: shopper.address.street,
        city: shopper.address.city,
        state: shopper.address.state,
        zip: shopper.address.zip
      });
    }
  };

  const handleClearFields = () => {
    setCustomer({
      name: '',
      email: '',
      street: '',
      city: '',
      state: '',
      zip: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting customer:', customer);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Customer</h3>
      <select value={selectedShopperId} onChange={handleSelectShopper}>
        <option value="">Select a Shopper</option>
        {shoppers.map(shopper => (
          <option key={shopper.customerID} value={shopper.customerID}>
            {shopper.name}
          </option>
        ))}
      </select>
      <br />
      <label>Name:<input type="text" name="name" value={customer.name} onChange={handleChange} required/></label>
      <br />
      <label>Email:<input type="email" name="email" value={customer.email} onChange={handleChange} required/></label>
      <br />
      <label>Street:<input type="text" name="street" value={customer.street} onChange={handleChange} required/> </label>
      <br />
      <label>City:<input type="text" name="city" value={customer.city} onChange={handleChange} required/></label>
      <br />
      <label>State:<input type="text" name="state" value={customer.state} onChange={handleChange} required/></label>
      <br />
      <label>Zip:<input type="text" name="zip" value={customer.zip} onChange={handleChange} required/></label>
      <br />
      <button type="submit">Save Customer</button>
      <button type="button" onClick={handleClearFields}>Clear Fields</button>
    </form>
  );
};

export default CustomerPanel;
