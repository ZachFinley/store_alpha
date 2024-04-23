import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/HomePage.css';
import React from 'react';
import products from '../objects/product.json';
//home page
function HomePage() {
  const featuredProducts = products.filter(product => product.featured);
  return (
    <div className="HomePage">
      <header className="HomePage-header">
        
        <p>HomePage</p>
      </header>
    </div>
  );
}
export default HomePage;