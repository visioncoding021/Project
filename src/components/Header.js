import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");

  return (
    <div className="flex justify-between items-center py-4 px-6 bg-gray-800">
      <div className="logo-container">
        <img className="h-10" src="https://cdn.dribbble.com/users/280206/screenshots/1622902/media/bc9dac9a09a0354bd9bcaa7e4c8c818e.jpg" alt="Logo"></img>
      </div>
      <div className="flex space-x-4">
        <ul className="flex space-x-4 text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contactus">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setBtnNameReact(btnNameReact === "login" ? "logOut" : "login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
