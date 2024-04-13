import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/CheckoutPage.css';
import React from 'react';
import NavbarComponent from '../hooks/Navbar';
//checkout page
function CheckoutPage() {
  return (
    <div className="CheckoutPage">
      <NavbarComponent />
      <header className="CheckoutPage-header">
        
        <p>CheckoutPage</p>
      </header>
    </div>
  );
}
export default CheckoutPage;