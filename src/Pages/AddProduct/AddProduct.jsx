import React from "react";
import { Button } from "react-bootstrap";
import Navbar from "../../Components/NavBar/Navrbar";
import "./Addproduct.css";

const AddProduct = () => {
  const [productData, changeProductData] = useState({});

  function handlechange(e) {
    changeProductData((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
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

        <Button id="submitbtn">SUBMIT</Button>
      </div>
    </div>
  );
};

export default AddProduct;
