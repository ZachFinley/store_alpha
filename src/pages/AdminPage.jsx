import React from 'react';
import '../styles/AdminPage.css';
import ProductPanel from '../Components/ProductPanel';
import CustomerPanel from '../Components/CustomerPanel';
import OrderPanel from '../Components/OrderPanel.jsx';

function AdminPage({ shoppers, orders, products, onProductUpdate, onCustomerUpdate }){
  return (
    <div className="admin">
      <div className="panels">
        <div className="colPanels">
          <ProductPanel products={products} onProductUpdate={onProductUpdate}/>
        </div>
        <div className="colPanels">
          <CustomerPanel shoppers={shoppers} onCustomerUpdate={onCustomerUpdate}/>
        </div>
      </div>
      <div className="bottomPanel">
        <OrderPanel orders={orders}/>
      </div>
    </div>

  );
};

export default AdminPage;



