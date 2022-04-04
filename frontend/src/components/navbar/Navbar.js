import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { FaRegUserCircle, FaSearch } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar">
        <div className="navbar-logo">
          <a href="#">
            <img src={logo} alt="Coffee Web" />
          </a>
        </div>
        <div className="navbar-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Menu</a>
          <a href="#">Products</a>
          <a href="#">Review</a>
          <a href="#">Contact</a>
          <a href="#">Blogs</a>
        </div>
        <div className="navbar-profile">
          <div className="navbar-profile-icons">
            <div className="navbar-profile-icon">
              <FaSearch size={18} />
            </div>
            <div className="navbar-profile-icon">
              <MdShoppingCart size={20} />
            </div>
            <div className="navbar-profile-icon">
              <div className="navbar-user">
                <FaRegUserCircle size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
