import React, { useState } from 'react';
import '../styles/ProductPanel.css';

const ProductPanel = ({products, onProductUpdate}) => {
  const [selectedProductId, setSelectedProductId] = useState('');
  const [product, setProduct] = useState({
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
        name: selectedProduct.name,
        price: selectedProduct.price.toString(),
        description: selectedProduct.description,
        category: selectedProduct.category,
        perPound: selectedProduct.perPound === "true", 
        image: selectedProduct.image
      });
    }
  };
  const handleClearFields = () => {
    setProduct({
      name: '',
      price: '',
      description: '',
      category: '',
      perPound: '',
      image: ''
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting product:', product);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Product</h3>
      <select value={selectedProductId} onChange={handleSelectProduct}>
        <option value="">Select a Product</option>
        {products.map(product => (
          <option key={product.id} value={product.id}>
            {product.name}
          </option>
        ))}
      </select>
      <br />
      <label>
        Name:
        <input type="text" name="name" value={product.name} onChange={handleChange} required/>
      </label>
      <br />
      <label>
        Price:
        <input type="number" name="price" value={product.price} onChange={handleChange} required/>
      </label>
      <br />
      <label>
        Description:
        <input type="text" name="description" value={product.description} onChange={handleChange} required/>
      </label>
      <br />
      <label>
        Category:
        <input type="text" name="category" value={product.category} onChange={handleChange} required/>
      </label>
      <br />
      <label>
        Per Pound:
        <input type="checkbox" name="perPound" checked={product.perPound} onChange={handleChange}/>
      </label>
      <br />
      <label>
        Image URL:
        <input type="text" name="image" value={product.image} onChange={handleChange} required/>
      </label>
      <br />
      <button type="submit">Save Product</button>
      <button type="button" onClick={handleClearFields}>Clear Fields</button>
    </form>
  );
};

export default ProductPanel;
