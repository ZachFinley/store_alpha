import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ProductPage.css';
import React from 'react';
import NavbarComponent from '../hooks/Navbar';
//product page
function ProductPage() {
  return (
    <div className="ProductPage">
    <NavbarComponent />
      <header className="ProductPage-header">
        
        <p>ProductPage</p>
      </header>
    </div>
  );
}
export default ProductPage;