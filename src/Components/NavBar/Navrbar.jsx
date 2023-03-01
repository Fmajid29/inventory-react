import React from "react";
import { Button } from "react-bootstrap";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Navrbar = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  function handlePlus() {
    navigate("/addproduct");
  }

  function handlelogout() {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert("error signingout");
      });
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
        <Button id="lgbtn" onClick={handlelogout}>
          LogOut
        </Button>
      </div>
    </div>
  );
};

export default Navrbar;
