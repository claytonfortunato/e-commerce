import React, { useState } from "react";

import Cart from "./Cart";

import { MdLocalGroceryStore } from "react-icons/md";
import "./NavBar.scss";

const NavBar = () => {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  return (
    <div className="nav">
      <nav className="nav-item">
        <ul className="nav-itens">
          <li className="logo">Sneakers Shopping</li>
          <li>
            <MdLocalGroceryStore
              onClick={() => setCartIsVisible(!cartIsVisible)}
            />
          </li>
        </ul>
      </nav>
      <Cart
        className={cartIsVisible ? <Cart /> : ""}
        onClick={() => setCartIsVisible(false)}
      />
    </div>
  );
};

export default NavBar;
