import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../App.css"; // Import CSS file

function UpdateOrderItem() {
  const { id } = useParams();
  const [orderItem, setOrderItem] = useState({
    orderId: "",
    productId: "",
    quanity: "",
    unitPrice: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8081/api/orderitem/${id}`)
      .then((response) => {
        setOrderItem(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the order item!", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderItem({ ...orderItem, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8081/api/update/${id}`, orderItem)
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        console.error("There was an error updating the order item!", error);
      });
  };

  return (
    <div className="update-form-container">
      <h2>Update Order Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="orderId"
          placeholder="Order ID"
          value={orderItem.orderId}
          onChange={handleChange}
        />
        <input
          type="text"
          name="productId"
          placeholder="Product ID"
          value={orderItem.productId}
          onChange={handleChange}
        />
        <input
          type="number"
          name="quanity"
          placeholder="Quantity"
          value={orderItem.quanity}
          onChange={handleChange}
        />
        <input
          type="number"
          step="0.01"
          name="unitPrice"
          placeholder="Unit Price"
          value={orderItem.unitPrice}
          onChange={handleChange}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateOrderItem;
