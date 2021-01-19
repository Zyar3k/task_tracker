import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, text }) => {
  const onClick = () => {
    console.log("click");
  };
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className='btn'
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Button;
