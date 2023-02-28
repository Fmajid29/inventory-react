import React from "react";
import { Button } from "react-bootstrap";
import "./Navbar.css";

const Navrbar = () => {
  return (
    <div className="MainNav">
      <div>
        <h1>TREW</h1>
      </div>
      <div>
        <Button id="smAddbtn">+</Button>

        <Button id="Addbtn">Add Products</Button>
        <Button id="lgbtn">LogOut</Button>
      </div>
    </div>
  );
};

export default Navrbar;
