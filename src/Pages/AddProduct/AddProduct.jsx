import React from "react";
import { Button } from "react-bootstrap";
import Navbar from "../../Components/NavBar/Navrbar";
import "./Addproduct.css";

const AddProduct = () => {
  return (
    <div className="Addproduct">
      <Navbar />
      <div className="MainAddPdt">
      <h1>NAME</h1>
        <input placeholder="Enter Product Name" />
      <h1>PRICE</h1>
        <input placeholder="Enter Price" />
        
      <h1>Quantity</h1>
      <input placeholder="Enter Quantity" />
         
        

        <Button id="submitbtn">SUBMIT</Button>

      </div>
    </div>
  );
};

export default AddProduct;
