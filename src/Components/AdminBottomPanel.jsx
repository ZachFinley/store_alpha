import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/AdminPage.css';

function AdminBottomPanel(orders) {
  return (
    <div className="AdminBottomPanel">
      <header className="AdminBottomPanel-header">
        
        <h3>Customer's Orders</h3>
      </header>
      <table>
        <thead>
          <tr>
            <th>OrderID</th>
            <th>Customer Name</th>
            <th>Items</th>
            <th>Order Total</th>
            <th>Order Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.orderID}>
              <td>{order.orderID}</td>
              <td>{order.customerName}</td>
              <td>{order.items}</td>
              <td>{order.orderTotal}</td>
              <td>{order.orderDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}   
export default AdminBottomPanel;