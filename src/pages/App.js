import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import ProductPage from './ProductPage.jsx';
import ShoppingPage from './ShoppingPage.jsx';
import CheckoutPage from './CheckoutPage.jsx';
import AdminPage from './AdminPage.jsx';
import '../styles/App.css'; 
import NavbarComponent from '../Components/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [cartItems, setCartItems] = useState([]);
    const handleUpdateCartQty = (productId, quantity) => {
        const updatedCartItems = cartItems.map(item =>
          item.id === productId ? { ...item, quantity: parseInt(quantity) } : item
        );
        setCartItems(updatedCartItems);
      };
    
      const handleRemoveFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
      };
    
      const handleEmptyCart = () => {
        setCartItems([]);
      };
  return (
    <div>
<Router>
        <NavbarComponent />
        <div className="content">
            <Routes>
                <Route path="/" element={<HomePage />} index />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/cart" element={<ShoppingPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/admin" element={<AdminPage />} />
            </Routes>
        </div>
    </Router>
    </div>
    
);
        
};

export default App;
