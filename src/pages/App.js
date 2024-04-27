import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import ProductPage from './ProductPage.jsx';
import ShoppingPage from './ShoppingPage.jsx';
import CheckoutPage from './CheckoutPage.jsx';
import AdminPage from './AdminPage.jsx';
import '../styles/App.css'; 
import NavbarComponent from '../Components/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import shoppersData from '../objects/shopper.json';
import ordersData from '../objects/order.json';
import productsData from '../objects/product.json';
import SignIn from '../Components/SignIn.jsx';
import SignUp from '../Components/SignUp.jsx';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [shoppers, setShoppers] = useState(shoppersData);
  const [orders, setOrders] = useState(ordersData);
  const [products, setProducts] = useState(productsData);
  const [user, setUser] = useState(null);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  // This is the Function to add items to the cart =)
  const addToCart = (product) => {
    const updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
    setCartItems(updatedCartItems);
  };

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

  const handleProductUpdate = (updatedProduct) => {
    setProducts(products => products.map(product =>
      product.id === updatedProduct.id ? updatedProduct : product
    ));
  };

  const handleCustomerUpdate = (updatedCustomer) => {
    setShoppers(shoppers => shoppers.map(shopper =>
      shopper.customerID === updatedCustomer.customerID ? updatedCustomer : shopper
    ));
  };
  const signIn = (userData) => {
    setUser(userData);
    setShowSignIn(false);
  };

  const signUp = (userData) => {
    setUser(userData);
    console.log(userData);
    setShowSignUp(false);
  };

  const signOut = () => {
    setUser(null);
  };
  return (
    <div>
      <Router>
        <NavbarComponent user={user} onSignIn={() => setShowSignIn(true)} onSignUp={() => setShowSignUp(true)} onSignOut={signOut}/>
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage products={products} />} index />
            <Route path="/products" element={<ProductPage products={products} addToCart={addToCart} />} />
            <Route path="/cart" element={<ShoppingPage cartItems={cartItems} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />} />
            <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} user={user}/>} />
            <Route path="/admin" element={<AdminPage shoppers={shoppers} orders={orders} products={products} onProductUpdate={handleProductUpdate} onCustomerUpdate={handleCustomerUpdate} />} />
            
          </Routes>
          
        </div>
      </Router>
      
      <SignIn show={showSignIn} onHide={() => setShowSignIn(false)} onSignIn={signIn} />
      <SignUp show={showSignUp} onHide={() => setShowSignUp(false)} onSignUp={signUp} />
      
    </div>
  );
}

export default App;
