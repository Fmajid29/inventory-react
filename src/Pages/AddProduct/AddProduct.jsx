import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Navbar from "../../Components/NavBar/Navrbar";
import "./Addproduct.css";
import { db } from "../../firebaseconfig";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router";

const AddProduct = () => {
  const navigate = useNavigate();
  const [productData, changeProductData] = useState({});
  const collectionref = collection(db, "products");

  function handlechange(e) {
    changeProductData((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  }

  function addProduct() {
    addDoc(collectionref, {
      name: productData.name,
      price: productData.price,
      qty: productData.qty,
    })
      .then(navigate("/adminpanel"))
      .catch(() => {
        alert("error adding product");
      });
  }

  return (
    <div className="Addproduct">
      <Navbar />
      <div className="MainAddPdt">
        <h1>NAME</h1>
        <input
          placeholder="Enter Product Name"
          name="name"
          onChange={handlechange}
          value={productData.name}
        />
        <h1>PRICE</h1>
        <input
          placeholder="Enter Price"
          name="price"
          onChange={handlechange}
          value={productData.price}
        />
        <h1>Quantity</h1>
        <input
          placeholder="Enter Quantity"
          name="qty"
          onChange={handlechange}
          value={productData.qty}
        />

        <Button id="submitbtn" onClick={addProduct}>
          SUBMIT
        </Button>
      </div>
    </div>
  );
};

export default AddProduct;
