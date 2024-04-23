import React from 'react';
import ProductPanel from '../Components/ProductPanel';
import CustomerPanel from '../Components/CustomerPanel';
import OrderPanel from '../Components/OrderPanel.jsx';

const AdminPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ display: 'flex', flex: 1 }}>
        <div style={{ flex: 1, padding: '10px', borderRight: '1px solid #ccc' }}>
          <ProductPanel />
        </div>
        <div style={{ flex: 1, padding: '10px', borderRight: '1px solid #ccc' }}>
          <CustomerPanel />
        </div>
      </div>
      <div style={{ flex: 1, padding: '10px' }}>
        <OrderPanel />
      </div>
    </div>
  );
};

export default AdminPage;



