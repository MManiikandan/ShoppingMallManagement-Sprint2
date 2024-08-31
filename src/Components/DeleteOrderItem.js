import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../App.css"; 

function DeleteOrderItem() {
  const { id } = useParams();
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8081/api/delete/${id}`)
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        console.error("There was an error deleting the order item!", error);
      });
  };

  useEffect(() => {
    setShowConfirm(true);
  }, [id]);

  return (
    <div className="delete-container">
      {showConfirm ? (
        <div className="confirmation-dialog">
          <h2>Are you sure you want to delete this order item?</h2>
          <button className="confirm-button" onClick={handleDelete}>
            Yes, Delete
          </button>
          <button className="cancel-button" onClick={() => navigate("/")}>
            Cancel
          </button>
        </div>
      ) : (
        <h2>Deleting Order Item...</h2>
      )}
    </div>
  );
}

export default DeleteOrderItem;
