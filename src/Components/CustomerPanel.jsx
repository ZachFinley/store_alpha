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
        address: {
            street: '',
            city: '',
            state: '',
            zip: ''
        },
        orderIDs: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'street' || name === 'city' || name === 'state' || name === 'zip') {
            setCustomer(prev => ({
                ...prev,
                address: {
                    ...prev.address,
                    [name]: value
                }
            }));
        } else {
            setCustomer(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSelectShopper = (e) => {
        const shopperId = e.target.value;
        setSelectedShopperId(shopperId);
        const selectedShopper = shoppers.find(shopper => shopper.customerID === shopperId);
        if (selectedShopper) {
            setCustomer({
                name: selectedShopper.name,
                email: selectedShopper.email,
                address: selectedShopper.address,
                orderIDs: selectedShopper.orderIDs
            });
        } else {
            handleClearFields();
        }
    };

    const handleClearFields = () => {
        setCustomer({
            name: '',
            email: '',
            address: {
                street: '',
                city: '',
                state: '',
                zip: ''
            },
            orderIDs: []
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCustomerUpdate({
            ...customer,
            customerID: selectedShopperId
        });
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
      <FormControl type="text" name="name" value={customer.name} onChange={handleChange} required/>
    </FormGroup>
    <FormGroup>
      <Form.Label>Email</Form.Label>
      <FormControl type="email" name="email" value={customer.email} onChange={handleChange} required/>
    </FormGroup>
    <FormGroup>
      <Form.Label>Street</Form.Label>
      <FormControl type="text" name="street" value={customer.address.street} onChange={handleChange} required />
    </FormGroup>
    <FormGroup>
      <Form.Label>City</Form.Label>
      <FormControl type="text" name="city" value={customer.address.city} onChange={handleChange} required/>
    </FormGroup>
    <FormGroup>
      <Form.Label>State</Form.Label>
      <FormControl type="text" name="state" value={customer.address.state} onChange={handleChange} required/>
    </FormGroup>
    <FormGroup>
      <Form.Label>Zip</Form.Label>
      <FormControl type="text" name="zip" value={customer.address.zip} onChange={handleChange} required/>
    </FormGroup>
    <Button variant="primary" type="submit">Save Customer</Button>
    <Button variant="secondary" type="button" onClick={handleClearFields}>Clear Fields</Button>
  </Form>
  );
};

export default CustomerPanel;
