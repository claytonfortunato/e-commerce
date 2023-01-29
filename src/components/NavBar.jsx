import React, { useState } from "react";

import Cart from "./Cart";

import { MdLocalGroceryStore } from "react-icons/md";
import "./NavBar.scss";

const NavBar = () => {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  return (
    <div className="nav">
      <nav className="nav-item">
        <ul className="nav-itens">
          <li className="logo">Sneakers Shopping</li>
          <li>
            <MdLocalGroceryStore onClick={handleCartClick} />
          </li>
        </ul>
      </nav>
      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </div>
  );
};

export default NavBar;
