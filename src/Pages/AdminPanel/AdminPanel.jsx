import React, { useEffect, useState } from "react";
import "./AdminPanel.css";
import Navbar from "../../Components/NavBar/Navrbar";
import Product from "../../Components/Product/Product";
import { db } from "../../firebaseconfig";
import { collection, getDocs } from "firebase/firestore";

const AdminPanel = () => {
  const collectionref = collection(db, "products");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getDocs(collectionref).then((reposnse) => {
      setProducts(() => {
        return [
          reposnse.docs.map((item) => {
            return (
              <Product
                key={item.id}
                id={item.id}
                name={item.data().name}
                price={item.data().price}
                qty={item.data().qty}
              />
            );
          }),
        ];
      });
    });
  });

  return (
    <div className="AdminPanel">
      <Navbar />
      <div className="container">
        <div className="products">{products}</div>
      </div>
    </div>
  );
};

export default AdminPanel;
