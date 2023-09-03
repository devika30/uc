import React from "react";
import PropTypes from "prop-types";
import "./card.css";

const Card = ({ title, image, content, children }) => {
  return (
    <div className="card">
      {title ? <h2 className="card-title">{title}</h2> : null}
      {image ? (
        <img
          src={image.url}
          alt={title || "Image"}
          className="card-image"
          width={image.width || 200}
        />
      ) : null}
      {content ? <p className="card-content">{content}</p> : null}
      {children ? (
        <div className="card-children-container">
          {children.map((child, index) => (
            <div className="card-children" key={index}>
              <div className="card-children-img-container">
                <img src={child.image} alt={child.title} />
              </div>
              <p>{child.title}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.shape({
    url: PropTypes.string,
    width: PropTypes.number,
  }),
  content: PropTypes.string.isRequired,
};

export default Card;