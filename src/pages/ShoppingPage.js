import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ShoppingPage.css';
import React from 'react';
import NavbarComponent from '../hooks/Navbar';
//shopping page
function ShoppingPage() {
  return (
    <div className="ShoppingPage">
      <NavbarComponent />
      <header className="ShoppingPage-header">
        
        <p>ShoppingPage</p>
      </header>
    </div>
  );
}
export default ShoppingPage;