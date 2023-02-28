import React from "react";
import { Button } from "react-bootstrap";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navrbar = () => {
  return (
    <div className="MainNav">
      <div>
        <h1>TREW</h1>
      </div>
      <div>
        <Link to="/addproduct">
          <Button id="smAddbtn">+</Button>
          <Button id="Addbtn">Add Products</Button>
        </Link>
        <Button id="lgbtn">LogOut</Button>
      </div>
    </div>
  );
};

export default Navrbar;
