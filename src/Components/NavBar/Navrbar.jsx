import React from "react";
import { Button } from "react-bootstrap";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navrbar = () => {
  const navigate = useNavigate();

  function handlePlus() {
    navigate("/addproduct");
  }

  return (
    <div className="MainNav">
      <div>
        <h1>TREW</h1>
      </div>
      <div>
        <Button id="smAddbtn" onClick={handlePlus}>
          +
        </Button>
        <Button id="Addbtn" onClick={handlePlus}>
          Add Products
        </Button>
        <Button id="lgbtn">LogOut</Button>
      </div>
    </div>
  );
};

export default Navrbar;
