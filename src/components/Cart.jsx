import React from "react";

import "./Cart.scss";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  return (
    <div className="cart-item" isVisible={isVisible}>
      <div onClick={handleEscapeAreaClick}></div>
      <h1>Cart carrinho</h1>
    </div>
  );
};

export default Cart;
