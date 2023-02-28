import React from "react";
import "./Product.css";
import { Button } from "react-bootstrap";

const Product = (props) => {
  return (
    <div className="mainDiv">
      <h1>{props.name}</h1>
      <h3>Rs {props.price}</h3>
      <h3>{props.qty} pcs</h3>
      <div className="quantity">
        <Button id="minusbutton">-</Button>
        <input type="text" placeholder="enter quatity" />
        <Button id="plusbutton">+</Button>
      </div>
    </div>
  );
};

export default Product;
