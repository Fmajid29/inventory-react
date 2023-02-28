import React from "react";
import "./AdminPanel.css";
import Navbar from "../../Components/NavBar/Navrbar";

const AdminPanel = () => {
  return (
    <div className="AdminPanel">
      <Navbar />
      <div className="container">
        <div className="products"></div>
      </div>
    </div>
  );
};

export default AdminPanel;
