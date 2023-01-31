import React, { useState } from "react";

import "./Cart.css";
import { MdRemoveShoppingCart } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import rootReducer from "../redux/root-reducer";

const Cart = ({ open, click }) => {
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  return (
    <div className={open ? "cart active" : "cart"}>
      <h2 className="cart-title">Seu Carrinho</h2>
      {products.map((product) => (
        <CartItem product={product} />
      ))}

      {/* Total */}
      <div className="total">
        <div className="total-title">Total $</div>
        <div className="total-price"></div>
      </div>
      {/* Buy Button */}
      <button type="button" className="btn-buy">
        Comprar Agora
      </button>
      {/* Cart Close */}
      <AiOutlineClose className="close-cart" size={20} onClick={click} />
    </div>
  );
};

export default Cart;
