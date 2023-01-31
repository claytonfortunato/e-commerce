import React from "react";

import { MdLocalGroceryStore } from "react-icons/md";
import "./NavBar.scss";

const NavBar = ({ click }) => {
  return (
    <div className="nav">
      <nav className="nav-item">
        <ul className="nav-itens">
          <li className="logo">Sneakers Shopping</li>
          <li>
            <MdLocalGroceryStore size={25} onClick={click} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
