import React, { useEffect, useState } from "react";
import ProductItem from "./Product-item";

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5173/src/static/shoes.json")
      .then((r) => r.json())
      .then(setData);
  }, []);

  return (
    <div className="container">
      {data.map((product) => {
        return <ProductItem product={product} key={product.id} />;
      })}
    </div>
  );
};

export default Card;
