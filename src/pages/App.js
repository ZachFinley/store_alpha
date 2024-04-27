import React, { useState, useEffect } from 'react';
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
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
  const [shoppers, setShoppers] = useState(JSON.parse(localStorage.getItem('shoppers')) || shoppersData);
  const [orders, setOrders] = useState(JSON.parse(localStorage.getItem('orders')) || ordersData);
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || productsData);
  const [user, setUser] = useState(null);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  console.log(localStorage.getItem('shoppers'));
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('shoppers', JSON.stringify(shoppers));
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('user', JSON.stringify(user));
    console.log("shoppers:", localStorage.getItem('shoppers'));
  }, [cartItems, shoppers, orders, products, user]);
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
    setProducts(prevProducts => {
      const productIndex = prevProducts.findIndex(product => product.id === updatedProduct.id);
      if (productIndex >= 0) {
        const newProducts = [...prevProducts];
        newProducts[productIndex] = updatedProduct;
        localStorage.setItem('products', JSON.stringify(newProducts));
        return newProducts;
      } else {
        const newProducts = [...prevProducts, updatedProduct];
        localStorage.setItem('products', JSON.stringify(newProducts));
        console.log(newProducts)
        return newProducts;
      }
    });
  };
  
  

  const handleCustomerUpdate = (updatedCustomer) => {
    setShoppers(prevShoppers => {
      const index = prevShoppers.findIndex(shopper => shopper.customerID === updatedCustomer.customerID);
      let newShoppers;
      if (index !== -1) {
        // Customer exists, update their details
        newShoppers = [...prevShoppers];
        newShoppers[index] = updatedCustomer;
      } else {
        // New customer, add them to the array
        newShoppers = [...prevShoppers, updatedCustomer];
      }
      localStorage.setItem('shoppers', JSON.stringify(newShoppers));
      console.log(newShoppers);
      return newShoppers;
    });
  };
  
  const signIn = (userData) => {
    setUser(userData);
    setShowSignIn(false);
  };

  const signUp = (userData) => {
    const newCustomer = {
        customerID: shoppers.length + 1,
        name: userData.name,
        email: userData.email,
        address: {
            street: userData.street,
            city: userData.city,
            state: userData.state,
            zip: userData.zip
        },
        orderIDs: []
    };
    handleCustomerUpdate(newCustomer);
    setUser(newCustomer);
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
