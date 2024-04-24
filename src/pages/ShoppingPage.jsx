import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ShoppingPage.css';
import React from 'react';
//shopping cart page
function ShoppingPage({ cartItems, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) {
  return (
    <div className="ShoppingPage">
      <header className="ShoppingPage-header">
        
        <p>ShoppingPage</p>
      </header>
    </div>
  );
}
export default ShoppingPage;