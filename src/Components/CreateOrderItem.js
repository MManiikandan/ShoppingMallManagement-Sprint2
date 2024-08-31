import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css"; 

function CreateOrderItem() {
  const [orderItem, setOrderItem] = useState({
    orderId: "",
    productId: "",
    quanity: "",
    unitPrice: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderItem({ ...orderItem, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/api/postorderitem", orderItem)
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        console.error("There was an error creating the order item!", error);
      });
  };

  return (
    <div className="form-container">
      <h2>Create New Order Item</h2>
      <form onSubmit={handleSubmit} className="order-form">
        <input
          type="text"
          name="orderId"
          placeholder="Order ID"
          value={orderItem.orderId}
          onChange={handleChange}
          className="form-input"
          required
        />
        <input
          type="text"
          name="productId"
          placeholder="Product ID"
          value={orderItem.productId}
          onChange={handleChange}
          className="form-input"
          required
        />
        <input
          type="number"
          name="quanity"
          placeholder="Quantity"
          value={orderItem.quanity}
          onChange={handleChange}
          className="form-input"
          required
        />
        <input
          type="number"
          step="0.01"
          name="unitPrice"
          placeholder="Unit Price"
          value={orderItem.unitPrice}
          onChange={handleChange}
          className="form-input"
          required
        />
        <button type="submit" className="submit-button">
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateOrderItem;
