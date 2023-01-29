import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5173/src/static/shoes.json")
      .then((r) => r.json())
      .then(setData);
  }, []);

  return (
    <div className="container">
      {data.map((item) => {
        const { id, name, price, oldPrice, image } = item;
        return (
          <ProjectCard
            key={name}
            id={id}
            image={image}
            name={name}
            price={price}
            oldPrice={oldPrice}
          />
        );
      })}
    </div>
  );
};

export default Card;
