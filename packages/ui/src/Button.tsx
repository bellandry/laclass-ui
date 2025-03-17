import React from "react";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-red-600 transition ${className}`}
    >
      {label}
    </button>
  );
};
