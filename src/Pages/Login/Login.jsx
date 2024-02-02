import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [loginData, changeLoginData] = useState({});

  function handlechange(e) {
    changeLoginData((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleLogin() {
    signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/adminpanel");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("incorrect Credentials");
        console.log(errorCode);
        console.log(errorMessage);
      });
  }

  return (
    <div className="login">
      <div className="loginform">
        <div className="picture"></div>
        <div className="inputform">
          <h1>TREW</h1>
          <input
            type="password"
            placeholder="Email"
            name="email"
            value={loginData.email}
            onChange={handlechange}
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            onChange={handlechange}
            value={loginData.password}
          />
          <Button onClick={handleLogin} id="lgnbtn">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
