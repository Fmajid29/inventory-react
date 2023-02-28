import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Login = () => {
  const [loginData, changeLoginData] = useState({});

  function handlechange(e) {
    changeLoginData((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <div className="login">
      <div className="loginform">
        <div className="picture"></div>
        <div className="inputform">
          <h1>TREW</h1>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={loginData.name}
            onChange={handlechange}
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            onChange={handlechange}
            value={loginData.password}
          />
          <Link to="/adminpanel">
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
