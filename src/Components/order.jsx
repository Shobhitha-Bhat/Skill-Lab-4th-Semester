// src/Components/Order.jsx
import React, { useContext } from "react";
import { OrderContext } from "./ordercontext";

const Order = () => {
  const { orders } = useContext(OrderContext);

  return (
    <div className="container mt-5">
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <ul>
          {orders.map((order, index) => (
            <li key={index}>{order.name} - Rs. {order.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Order;


