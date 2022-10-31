import React from "react";
import "./Button.scss";

type ButtonProps = {
  children: React.ReactNode;
  active?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
};

const Button = ({ children, active, className = "", type }: ButtonProps) => {
  return (
    <button
      className={(active ? "button button_active" : "button") + ` ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
