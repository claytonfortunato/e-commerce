import React from "react";

import { MdLocalGroceryStore } from "react-icons/md";
import "./ProjectCard.scss";

const ProjectCard = ({ id, name, price, oldPrice, image }) => {
  return (
    <div className="project">
      <div className="project_item" key={id}>
        <div className="project_image">
          <img src={image} alt={name} />
        </div>
        <div className="project_info">
          <span className="name">{name}</span>
          <span className="oldPrice">${oldPrice}</span>
          <span className="price">${price}</span>
          <button className="btn">
            <MdLocalGroceryStore />
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
