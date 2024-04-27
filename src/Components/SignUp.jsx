import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function SignUp({ show, onHide, onSignUp }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSignUp({
      customerID: 2,
      name,
      email,
      address: { street, city, state, zip },
      orderIDs: []  
    });
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Create Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Street</Form.Label>
            <Form.Control type="text" placeholder="123 Main St" value={street} onChange={(e) => setStreet(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="text" placeholder="Zip Code" value={zip} onChange={(e) => setZip(e.target.value)} required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create Account
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default SignUp;
