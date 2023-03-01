import React, { useState } from "react";
import "./Product.css";
import { Button } from "react-bootstrap";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebaseconfig";

const Product = (props) => {
  const [qty, changeqty] = useState();

  function handleqty(e) {
    if (!isNaN(e.target.value)) {
      changeqty(e.target.value);
    }
  }

  function handleDelete() {
    deleteDoc(doc(db, "products", props.id));
  }

  return (
    <div className="mainDiv">
      <h1>{props.name}</h1>
      <h3>Rs {props.price}</h3>
      <h3>{props.qty} pcs</h3>
      <div className="quantity">
        <Button id="minusbutton">-</Button>
        <input
          type="text"
          placeholder="enter quantity"
          value={qty}
          onChange={handleqty}
        />
        <Button id="plusbutton" onClick={handleDelete}>
          +
        </Button>
      </div>
    </div>
  );
};

export default Product;
