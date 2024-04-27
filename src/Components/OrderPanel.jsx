import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const OrderPanel = ({orders, refreshOrders, shoppers}) => {
  const [selectedCustomerId, setSelectedCustomerId] = useState('');
  const clearChanges = () => {
    localStorage.removeItem('orders');
    refreshOrders([]);
};
  const handleCustomerSelection = (e) => {
    setSelectedCustomerId(e.target.value);
  };

  const selectedCustomer = shoppers.find(shopper => shopper.customerID === selectedCustomerId);

  return (
    <div>
      <h3>View Orders</h3>
      <select onChange={handleCustomerSelection} value={selectedCustomerId}>
        <option value="">Select a Shopper</option>
        {shoppers.map(shopper => (
          <option key={shopper.customerID} value={shopper.customerID}>
            Shopper {shopper.name}
          </option>
        ))}
      </select>
      <Button variant="danger" type="button" onClick={clearChanges}>Reset Orders</Button>
      {selectedCustomer && (
        <table className="table table-bordered table-striped table-responsive-md">
        <thead className="thead-dark">
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Total</th>
            <th>Status</th>
            <th>Items</th>
          </tr>
        </thead>
        <tbody>
          {selectedCustomer.orderIDs.map(orderId => {
            const order = orders.find(order => order.orderID === orderId);
            return order ? (
              <tr key={order.orderID}>
                <td>{order.orderID}</td>
                <td>{new Date(order.date).toLocaleDateString()}</td>
                <td>${order.total.toFixed(2)}</td>
                <td>{order.status}</td>
                <td>
                  {order.items.map((item, index) => (
                    <div key={index}>{item.name} (Qty: {item.quantity})</div>
                  ))}
                </td>
              </tr>
            ) : null;
          })}
        </tbody>
      </table>
      )}
    </div>
  );
};

export default OrderPanel;
