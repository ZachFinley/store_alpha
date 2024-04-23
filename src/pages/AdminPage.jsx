import React from 'react';
import '../styles/AdminPage.css';
import ProductPanel from '../Components/ProductPanel';
import CustomerPanel from '../Components/CustomerPanel';
import OrderPanel from '../Components/OrderPanel.jsx';

const AdminPage = () => {
  return (
    <div className="admin">
      <div className="panels">
        <div className="colPanels">
          <ProductPanel />
        </div>
        <div className="colPanels">
          <CustomerPanel />
        </div>
      </div>
      <div className="bottomPanel">
        <OrderPanel />
      </div>
    </div>

  );
};

export default AdminPage;



