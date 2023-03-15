import React, { useEffect, useState } from "react";
import "./landingPage1.css";
import dummyData from "./dummyData.json";
import { useNavigate } from "react-router-dom";

export default function LandingPge() {
  const navigate = useNavigate();

  var email;
  var password;

  const handleChangeEmail = (e) => {
    email = e.target.value;
  };
  const handleChangePassword = (e) => {
    password = e.target.value;
  };
  const handleClick = () => {
    const data = dummyData.dummyData.map((element) => {
      return element.email === email && element.password === password;
    });
    if (data.includes(true)) {
      navigate("/OrdersPage");
    }else{
      alert("Please check entered email or Password or register your Email")
    }
  };

  return (
    <div class="mainDiv">
      <label>Enter valid E-mail: </label>
      <input type="email" onChange={(e) => handleChangeEmail(e)}>
        {email}
      </input>
      <label>Password </label>
      <input type="text" onChange={(e) => handleChangePassword(e)}></input>
      <div class="logonButton">
        <button class="logonButtonStyle" onClick={handleClick}>
          Log on
        </button>
      </div>
    </div>
  );
}
