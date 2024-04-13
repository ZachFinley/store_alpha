import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from '../hooks/Navbar';
import DiscountedProducts from '../hooks/DiscountedProducts';
import '../styles/App.css';
import React from 'react';
//index page
function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <header className="App-header">
      <p>App</p><DiscountedProducts />
        
      </header>
     
    </div>
  );
}

export default App;
