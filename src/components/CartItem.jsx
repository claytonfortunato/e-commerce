import { MdRemoveShoppingCart } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";

import {
  removeProductFromCart,
  increaseProductQuantity,
  decreaseProductQuantity,
} from "../redux/cart/actions";

// Styles
import "./CartItem.scss";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeProductFromCart(product.id));
  };

  const handleIncreaseClick = () => {
    dispatch(increaseProductQuantity(product.id));
  };

  const handleDecreaseClick = () => {
    dispatch(decreaseProductQuantity(product.id));
  };

  return (
    <div className="cart-item">
      <div className="cart-box">
        <img src={product.image} alt="Sneakers" />
        <div className="detail-box">
          <div className="cart-product-title">{product.name}</div>
          <div className="cart-price">{product.price}</div>

          <div className="detail-quantity">
            <AiOutlineMinus
              size={20}
              cursor="pointer"
              onClick={handleDecreaseClick}
            />
            <p>{product.quantity}</p>
            <AiOutlinePlus
              size={20}
              cursor="pointer"
              onClick={handleIncreaseClick}
            />
          </div>
        </div>
        {/* Remove Cart */}
        <MdRemoveShoppingCart
          size={25}
          color="red"
          cursor="pointer"
          onClick={handleRemoveClick}
        />
      </div>
    </div>
  );
};

export default CartItem;
