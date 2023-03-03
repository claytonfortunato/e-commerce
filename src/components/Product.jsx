import products from "../data/shoes";

import ProductItem from "./ProductItem/ProductItem";

const Card = () => {
  return (
    <div className="container">
      {products.map((product) => {
        return <ProductItem product={product} key={product.id} />;
      })}
    </div>
  );
};

export default Card;
