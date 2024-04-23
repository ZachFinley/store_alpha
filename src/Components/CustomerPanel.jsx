import React, { useState } from 'react';

const CustomerPanel = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting customer:', customer);
    // Here you would typically make an API call
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Customer</h3>
      <label>
        Name:
        <input type="text" name="name" value={customer.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={customer.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Street:
        <input type="text" name="street" value={customer.street} onChange={handleChange} />
      </label>
      <br />
      <label>
        City:
        <input type="text" name="city" value={customer.city} onChange={handleChange} />
      </label>
      <br />
      <label>
        State:
        <input type="text" name="state" value={customer.state} onChange={handleChange} />
      </label>
      <br />
      <label>
        Zip:
        <input type="text" name="zip" value={customer.zip} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Save Customer</button>
    </form>
  );
};

export default CustomerPanel;
