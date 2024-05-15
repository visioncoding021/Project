import React, { useState } from "react";
import {NavLink} from 'react-router-dom'

const Header = () => {
  const [loginLogOut, setLoginLogOut] = useState("Log Out");

  const changeStatus = () => {
    setLoginLogOut((prevStatus) => (prevStatus === "Log Out" ? "Log in" : "Log Out"));
  };

  return (
    <div className="header-container">
      <div className="header-title">
        <h1>Talk-Show</h1>
      </div>
        <h3><NavLink to = "/about">About Us</NavLink></h3>
        <h3>contact us</h3>
        <h3><NavLink to = "/more">More</NavLink></h3>
      <div className="header-options">
        <button className="login-button" onClick={changeStatus}>
          {loginLogOut}
        </button>
        {/* Add more options here */}
      </div>
    </div>
  );
};

export default Header;
