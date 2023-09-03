import React from "react";
import PropTypes from "prop-types";
import { buttonTypes } from "./type";
import "./button.css";

const Button = ({ label, type, onClick }) => {
  const buttonType = buttonTypes[type] || buttonTypes.primary;
  return (
    <button className={`btn btn-${buttonType.className}`} onClick={onClick}>
      {label || buttonType.label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(Object.keys(buttonTypes)),
};

Button.defaultProps = {
  type: "primary",
};

export default Button;