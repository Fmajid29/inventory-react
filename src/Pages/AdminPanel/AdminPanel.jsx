import React from "react";
import "./AdminPanel.css";
import Navbar from "../../Components/NavBar/Navrbar";
import Product from "../../Components/Product/Product";

const AdminPanel = () => {
  return (
    <div className="AdminPanel">
      <Navbar />
      <div className="container">
        <div className="products">
          <Product name="Name" price="400" qty="29" />
          <Product name="Name" price="400" qty="29" />
          <Product name="Name" price="400" qty="29" />
          <Product name="Name" price="400" qty="29" />
          <Product name="Name" price="400" qty="29" />
          <Product name="Name" price="400" qty="29" />
          <Product name="Name" price="400" qty="29" />
          <Product name="Name" price="400" qty="29" />
          <Product name="Name" price="400" qty="29" />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
