"use client";
import React from "react";

type ButtonProps = {
  title: string;
  color: "primary" | "secondary" | "tertiary";
  type: "fill" | "outline";
  handleClick: () => void;
};

const Button = ({ title, color, type, handleClick }: ButtonProps) => {
  const getClasses = () => {
    let classes =
      "px-3 py-2.5 font-semibold text-xs uppercase whitespace-nowrap tracking-wide cursor-pointer border transition-colors ";
    if (color === "primary") {
      classes +=
        "border-primary text-primary hover:bg-primary hover:text-white ";
      if (type === "fill") {
        classes += "bg-primary text-white ";
      }
    } else if (color === "secondary") {
      classes +=
        "border-secondary text-secondary hover:bg-secondary hover:text-white ";
      if (type === "fill") {
        classes += "bg-secondary text-white ";
      }
    } else {
      classes +=
        "border-tertiary text-tertiary hover:bg-tertiary hover:text-white ";
      if (type === "fill") {
        classes += "bg-tertiary text-white ";
      }
    }
    return classes;
  };
  return (
    <button
      className={getClasses()}
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
    >
      {title}
    </button>
  );
};

export default Button;
