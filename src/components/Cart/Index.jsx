import { AiOutlineClose } from "react-icons/ai";
import CartItem from "../CartItem/Index";
import { useSelector } from "react-redux";

import "./Cart.css";
import { selectProductsTotalPrice } from "../../redux/cart/cart.selectors";

const Cart = ({ open, click }) => {
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  const productsTotalPrice = useSelector(selectProductsTotalPrice);

  return (
    <div className={open ? "cart active" : "cart"}>
      <h2 className="cart-title">Seu Carrinho</h2>
      {products.map((product) => (
        <CartItem product={product} />
      ))}

      {/* Total */}
      <div className="total">
        <div className="total-title">Total $</div>
        <div className="total-price"> {productsTotalPrice} </div>
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
