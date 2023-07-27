import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState(false);

  return (
    <div className="header">
      <div className="logo-cotainer">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>Cart</li>
          {loggedInUser ? (
            <button
              className="login"
              onClick={() => {
                setLoggedInUser(false);
              }}
            >
              logout
            </button>
          ) : (
            <button
              className="login"
              onClick={() => {
                setLoggedInUser(true);
              }}
            >
              login
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
