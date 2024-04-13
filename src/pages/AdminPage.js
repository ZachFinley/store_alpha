import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/AdminPage.css';
import React from 'react';
import NavbarComponent from '../hooks/Navbar';  
//admin page
function AdminPage() {
  return (
    <div className="AdminPage">
      <NavbarComponent />
      <header className="AdminPage-header">
        
        <p>AdminPage</p>
      </header>
    </div>
  );
}
export default AdminPage;