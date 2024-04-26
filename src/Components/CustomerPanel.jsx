import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
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
    <Form onSubmit={handleSubmit}>
    <h3>Edit Customer</h3>
    <Form.Group controlId="formCustomerSelect">
      <Form.Label>Select Customer</Form.Label>
      <Form.Select value={selectedShopperId} onChange={handleSelectShopper}>
        <option value="">Select a Customer</option>
        {shoppers.map((shopper) => (
          <option key={shopper.customerID} value={shopper.customerID}>
            {shopper.name}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
    <br />
    <FormGroup>
      <Form.Label>Name</Form.Label>
      <FormControl
        type="text"
        name="name"
        value={customer.name}
        onChange={handleChange}
        required
      />
    </FormGroup>
    <FormGroup>
      <Form.Label>Email</Form.Label>
      <FormControl type="email" name="email" value={customer.email} onChange={handleChange} require/>
    </FormGroup>
    <FormGroup>
      <Form.Label>Street</Form.Label>
      <FormControl type="text" name="street" value={customer.street} onChange={handleChange} required />
    </FormGroup>
    <FormGroup>
      <Form.Label>City</Form.Label>
      <FormControl type="text" name="city" value={customer.city} onChange={handleChange} required/>
    </FormGroup>
    <FormGroup>
      <Form.Label>State</Form.Label>
      <FormControl type="text" name="state" value={customer.state} onChange={handleChange} required/>
    </FormGroup>
    <FormGroup>
      <Form.Label>Zip</Form.Label>
      <FormControl type="text" name="zip" value={customer.zip} onChange={handleChange} required/>
    </FormGroup>
    <Button variant="primary" type="submit">Save Customer</Button>
    <Button variant="secondary" type="button" onClick={handleClearFields}>Clear Fields</Button>
  </Form>
  );
};

export default CustomerPanel;
