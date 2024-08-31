import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function OrderItemList() {
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/orderitems")
      .then((response) => {
        setOrderItems(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the order items!", error);
      });
  }, []);

  return (
    <div className="table-container">
      <h2>Order Items List</h2>
      <Link to="/create">Create New Order Item</Link>
      <table>
        <thead>
          <tr>
            <th>Order Item ID</th>
            <th>Order ID</th>
            <th>Product ID</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orderItems.map((orderItem) => (
            <tr key={orderItem.orderItemId}>
              <td>{orderItem.orderItemId}</td>
              <td>{orderItem.orderId}</td>
              <td>{orderItem.productId}</td>
              <td>{orderItem.quanity}</td>
              <td>${orderItem.unitPrice}</td>
              <td>
                <Link to={`/update/${orderItem.orderItemId}`}>✏️Edit</Link>
                {" | "}
                <Link to={`/delete/${orderItem.orderItemId}`}>🗑️Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderItemList;
