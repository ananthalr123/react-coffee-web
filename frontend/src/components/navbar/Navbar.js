import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Coffee Web" />
          </Link>
        </div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/products">Products</Link>
          <Link to="/review">Review</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blogs">Blogs</Link>
        </div>
        <div className="navbar-profile">
          <div className="navbar-profile-icons">
            <div className="navbar-profile-icon">
              <MdShoppingCart size={28} />
              <div className="cart-count">
                <p>8</p>
              </div>
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
