import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement authentication logic here
  };

  return (
    <p>login html</p>
  );
}

export default Login;
