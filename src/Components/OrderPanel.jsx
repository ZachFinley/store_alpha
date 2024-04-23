import React, { useState } from 'react';

const OrderPanel = ({ orders = [] }) => {
  const [selectedOrderId, setSelectedOrderId] = useState('');

  const handleOrderSelection = (e) => {
    setSelectedOrderId(e.target.value);
  };

  const selectedOrder = orders.find(order => order.orderID === selectedOrderId);

  return (
    <div>
      <h3>View Order</h3>
      <select onChange={handleOrderSelection} value={selectedOrderId}>
        {orders.map(order => (
          <option key={order.orderID} value={order.orderID}>
            Order {order.orderID}
          </option>
        ))}
      </select>
      <ul>
        {selectedOrder && selectedOrder.items.map((item, index) => (
          <li key={index}>{item.name} - Quantity: {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrderPanel;
