import React from "react";

const CartItem = ({ product }) => {
  return (
    <div className="cart-item">
      <div className="cart-box">
        <img src={product.image} alt="" />
        <div className="detail-box">
          <div className="cart-product-title">{product.name}</div>
          <div className="cart-price">{product.price}</div>

          <div className="detail-quantity">
            <AiOutlineMinus size={20} />
            <p></p>
            <AiOutlinePlus size={20} />
          </div>
        </div>
        {/* Remove Cart */}
        <MdRemoveShoppingCart size={25} color="red" cursor="pointer" />
      </div>
    </div>
  );
};

export default CartItem;
