import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-none",
  circle: "rounded-[50%]",
  round: "rounded-lg",
};
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-green-700",
    green_700: "bg-green-700 shadow-bs text-white-A700",
    gray_100: "bg-gray-100",
    gray_900: "bg-gray-900",
  },
};
const sizes = {
  xs: "py-px",
  sm: "p-[5px]",
  md: "p-2",
  lg: "p-3",
  xl: "p-[18px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700", "green_700", "gray_100", "gray_900"]),
};

export { Button };
