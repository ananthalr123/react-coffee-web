import React from "react";
import "./Menu.css";
import MenuItem from "../menuItem/MenuItem";
import { items } from "../menuItem/itemsList";

const Menu = () => {
  return (
    <section id="menu">
      <div className="menu-container">
        <div className="menu-row">
          <h4 className="menu-container-heading">
            Our <span>Menu</span>
          </h4>
        </div>
        <div className="menu-row">
          <div className="menu-items">
            {items.map((item) => (
              <MenuItem
                key={item.id}
                title={item.name}
                image={item.image}
                price={item.price}
                olderPrice={item.olderPrice}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
