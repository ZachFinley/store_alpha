import React from 'react';
import '../styles/AdminPage.css';
import ProductPanel from '../Components/ProductPanel';
import CustomerPanel from '../Components/CustomerPanel';
import OrderPanel from '../Components/OrderPanel.jsx';

const AdminPage = () => {
  return (
    <div class="admin">
      <div class="panels">
        <div class="colPanels">
          <ProductPanel />
        </div>
        <div class="colPanels">
          <CustomerPanel />
        </div>
      </div>
      <div class="bottomPanel">
        <OrderPanel />
      </div>
    </div>

  );
};

export default AdminPage;



