import React, { useState } from 'react';

const ProductPanel = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting product:', product);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Product</h3>
      <label>
        Name:
        <input type="text" name="name" value={product.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Price:
        <input type="number" name="price" value={product.price} onChange={handleChange} />
      </label>
      <br />
      <label>
        Description:
        <input type="text" name="description" value={product.description} onChange={handleChange} />
      </label>
      <br />
      <label>
        Category:
        <input type="text" name="category" value={product.category} onChange={handleChange} />
      </label>
      <br />
      <label>
        Per Pound:
        <input type="checkbox" name="perPound" checked={product.perPound} onChange={handleChange} />
      </label>
      <br />
      <label>
        Image URL:
        <input type="text" name="image" value={product.image} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Save Product</button>
    </form>
  );
};

export default ProductPanel;
