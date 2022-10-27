import React from "react";
import "./Button.scss";

type ButtonProps = {
  children: React.ReactNode;
  active?: boolean;
  className?: string;
};

const Button = ({
  children,
  active,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={(active ? "button button_active" : "button") + ` ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
