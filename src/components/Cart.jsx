import React from "react";

import "./Cart.scss";
import { MdRemoveShoppingCart } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";

const Cart = ({ isVisible, setIsVisible }) => {
  return (
    <div className="cart" isVisible={isVisible}>
      <h2 className="cart-title">Seu Carrinho</h2>
      <div className="cart-item">
        <div className="cart-box">
          <img
            src="https://imgcentauro-a.akamaihd.net/230x230/95707858.jpg"
            alt=""
            className="cart-img"
          />
          <div className="detail-box">
            <div className="cart-product-title">Tenis Mizuno</div>
            <div className="cart-price">$2,000</div>

            <div className="detail-quantity">
              <AiOutlineMinus size={20} />
              <p>0</p>
              <AiOutlinePlus size={20} />
            </div>
          </div>
          {/* Remove Cart */}
          <MdRemoveShoppingCart size={25} color="red" cursor="pointer" />
        </div>
        {/* Total */}
        <div className="total">
          <div className="total-title">Total</div>
          <div className="total-price">$0</div>
        </div>
        {/* Buy Button */}
        <button type="button" className="btn-buy">
          Comprar Agora
        </button>
        {/* Cart Close */}
        <AiOutlineClose className="close-cart" size={20} />
      </div>
    </div>
  );
};

export default Cart;
