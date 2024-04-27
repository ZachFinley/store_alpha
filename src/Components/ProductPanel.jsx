import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormCheck from 'react-bootstrap/FormCheck';
import '../styles/ProductPanel.css';

const ProductPanel = ({products, onProductUpdate, refreshProducts}) => {
  const [selectedProductId, setSelectedProductId] = useState('');
    const [product, setProduct] = useState({
        id: '',
        name: '',
        price: '',
        description: '',
        category: '',
        perPound: false,
        image: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProduct(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSelectProduct = (e) => {
        const productId = e.target.value;
        setSelectedProductId(productId);
        const selectedProduct = products.find(p => p.id.toString() === productId);
        if (selectedProduct) {
            setProduct({
                id: selectedProduct.id,
                name: selectedProduct.name,
                price: selectedProduct.price.toString(),
                description: selectedProduct.description,
                category: selectedProduct.category,
                perPound: selectedProduct.perPound === "true",  // Assuming perPound is stored as a boolean in your state
                image: selectedProduct.image
            });
        } else {
            handleClearFields();
        }
    };

    const handleClearFields = () => {
        setProduct({
            name: '',
            price: '',
            description: '',
            category: '',
            perPound: false,
            image: ''
        });
    };
    const clearChanges = () => {
      localStorage.removeItem('products');
      refreshProducts([]);
  };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedProductId) {
            onProductUpdate(product);
        }
    };

  return (
  <Form onSubmit={handleSubmit}>
    <h3>Edit Product</h3>
    <Form.Group controlId="formProductSelect">
      <Form.Label>Select Product</Form.Label>
      <Form.Select value={selectedProductId} onChange={handleSelectProduct}>
        <option value="">Select a Product</option>
        {products.map((product) => (
          <option key={product.id} value={product.id}>
            {product.name}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
    <br />
    <FormGroup>
      <Form.Label>Name</Form.Label>
      <FormControl type="text" name="name" value={product.name} onChange={handleChange} required/>
    </FormGroup>
    <FormGroup>
      <Form.Label>Price</Form.Label>
      <FormControl type="number" name="price" value={product.price} onChange={handleChange} required/>
    </FormGroup>
    <FormGroup>
      <Form.Label>Category</Form.Label>
      <FormControl type="text"name="category" value={product.category} onChange={handleChange} required />
    </FormGroup>
    <FormGroup>
      <FormCheck type="checkbox" name="perPound" label="Per Pound" checked={product.perPound} onChange={handleChange} />
    </FormGroup>
    <FormGroup>
      <Form.Label>Image URL</Form.Label>
      <FormControl type="text" name="image" value={product.image} onChange={handleChange} required />
    </FormGroup>
    <Button variant="primary" type="submit">Save Product</Button>
    <Button variant="secondary" type="button" onClick={handleClearFields}>Clear Fields</Button>
    <Button variant="danger" type="button" onClick={clearChanges}>Reset Products</Button>
  </Form>
);
};
export default ProductPanel;
