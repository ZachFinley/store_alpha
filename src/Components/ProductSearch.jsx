import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ProductSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };
  
  return (
    <p>Search for products here</p>
  );
};

export default ProductSearch;
