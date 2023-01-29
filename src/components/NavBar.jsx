import React from "react";

import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="nav">
      <nav className="nav-item">
        <ul className="nav-itens">
          <li className="logo">Sneakers Shopping</li>
          <li>Carrinho</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
