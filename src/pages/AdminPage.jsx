import React from 'react';
import '../styles/AdminPage.css';
import ProductPanel from '../Components/ProductPanel';
import CustomerPanel from '../Components/CustomerPanel';
import OrderPanel from '../Components/OrderPanel.jsx';

function AdminPage({ shoppers, orders, products, onProductUpdate, onCustomerUpdate, refreshCustomers, refreshOrders, refreshProducts }){
  return (
    <div className="admin">
      <div className="panels">
        <div className="colPanels">
          <ProductPanel products={products} onProductUpdate={onProductUpdate} refreshProducts={refreshProducts}/>
        </div>
        <div className="colPanels">
          <CustomerPanel shoppers={shoppers} onCustomerUpdate={onCustomerUpdate} refreshCustomers={refreshCustomers}/>
        </div>
      </div>
      <div className="bottomPanel">
        <OrderPanel orders={orders} refreshOrders={refreshOrders} shoppers={shoppers}/>
      </div>
    </div>

  );
};

export default AdminPage;



