import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ProductPage.css';
import React, { useState } from 'react';
//product page
function ProductPage({ products }) {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleAddToCart = (product) => {
    // add product to cart
  };
  

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