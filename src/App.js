import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateOrderItem from "./Components/CreateOrderItem";
import UpdateOrderItem from "./Components/UpdateOrderItem";
import OrderItemList from "./Components/OrderItemList";
import DeleteOrderItem from "./Components/DeleteOrderItem";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>OrderItem Management</h1>
        <nav>
          <a href="/">Home</a>
        </nav>
        <div className="page-container">
          <Routes>
            <Route path="/" element={<OrderItemList />} />
            <Route path="/create" element={<CreateOrderItem />} />
            <Route path="/update/:id" element={<UpdateOrderItem />} />
            <Route path="/delete/:id" element={<DeleteOrderItem />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
