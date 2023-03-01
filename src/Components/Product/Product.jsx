import React, { useState } from "react";
import "./Product.css";
import { Button } from "react-bootstrap";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
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

  function handleAdd() {
    let currentqty = Number(props.qty) + Number(qty);
    const docToUpdate = doc(db, "products", props.id);
    updateDoc(docToUpdate, {
      name: props.name,
      price: props.price,
      qty: currentqty,
    });
  }
  function handleMinus() {
    let currentqty = Number(props.qty) - Number(qty);
    if (currentqty < 0) {
      alert("less then 0 quantity not possible");
      return;
    }
    const docToUpdate = doc(db, "products", props.id);
    updateDoc(docToUpdate, {
      name: props.name,
      price: props.price,
      qty: currentqty,
    });
  }

  return (
    <div className="mainDiv">
      <div className="cross">
        <h1>{props.name}</h1>
        <Button className="btn btn-danger" onClick={handleDelete}>
          X
        </Button>
      </div>
      <h3>Rs {props.price}</h3>
      <h3>{props.qty} pcs</h3>
      <div className="quantity">
        <Button id="minusbutton" onClick={handleMinus}>
          -
        </Button>
        <input
          type="text"
          placeholder="enter quantity"
          value={qty}
          onChange={handleqty}
        />
        <Button id="plusbutton" onClick={handleAdd}>
          +
        </Button>
      </div>
    </div>
  );
};

export default Product;
