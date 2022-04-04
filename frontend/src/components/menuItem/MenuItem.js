import React from "react";
import "./MenuItem.css";

const MenuItem = ({ image, title, price, olderPrice }) => {
  return (
    <div className="menu-item">
      <div className="item-image">
        <img src={image} alt="Menu Item Image" />
      </div>
      <div className="item-name">{title}</div>
      <div className="item-price">
        Rs. {price}.00 {"  "}
        <span className="older-price">Rs. {olderPrice}.00</span>
      </div>
      <div className="item-button">
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default MenuItem;
