import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ProductPage.css';
import React, { useState, useEffect } from 'react';
import products from '../product.json';
//product page
function ProductPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleAddToCart = (product) => {
    // add product to cart
  };
  useEffect(() => {
    setProducts(products);
    setFilteredProducts(products);
  }, []);

  const handleSearch = searchTerm => {
    const filtered = [];
    setFilteredProducts(filtered);
  };
  
  return (
    <div className="ProductPage">
      <header className="ProductPage-header">
        
        <p>ProductPage</p>
      </header>
    </div>
  );
}
export default ProductPage;