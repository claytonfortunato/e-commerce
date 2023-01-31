import { useDispatch } from "react-redux";
import { addProductToCart } from "../redux/cart/actions";

import { MdLocalGroceryStore } from "react-icons/md";
import "./ProjectCard.scss";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleProductClick = () => {
    dispatch(addProductToCart(product));
  };

  return (
    <div className="project">
      <div className="project_item" key={product.id}>
        <div className="project_image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="project_info">
          <span className="name">{product.name}</span>
          <span className="oldPrice">${product.oldPrice}</span>
          <span className="price">${product.price}</span>
          <button className="btn" onClick={handleProductClick}>
            <MdLocalGroceryStore />
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
