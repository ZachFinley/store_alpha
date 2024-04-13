import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ProductPage from './ProductPage';
import ShoppingPage from './ShoppingPage';
import CheckoutPage from './CheckoutPage';
import AdminPage from './AdminPage';
import '../styles/App.css'; 
import NavbarComponent from '../hooks/Navbar';

const App = () => {
    return (
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
    );
};

export default App;
