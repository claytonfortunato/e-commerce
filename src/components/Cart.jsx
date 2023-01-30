import React from "react";

import "./Cart.scss";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  return (
    <div className="cart" isVisible={isVisible}>
      <h2 className="cart-title">Seu Carrinho</h2>
      <div className="cart-item"></div>
    </div>
  );
};

export default Cart;
