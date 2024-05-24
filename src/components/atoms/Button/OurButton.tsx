import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface OurButtonProps {
  children: ReactNode;
  className?: string;
  isDisabled?: boolean;
  colorScheme?: "primary" | "secondary" | "warning" | "danger" | "success";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "solid" | "outline" | "ghost" | "link";
}

const getColorSchemeClass = (
  colorScheme: string,
  isDisabled: boolean,
  variant: string,
) => {
  const baseClass = "transition-colors duration-300";
  let colorClass = "";

  if (isDisabled) {
    return `${baseClass} bg-gray-300 text-gray-500 cursor-not-allowed border rounded-lg`;
  }

  switch (colorScheme) {
    case "primary":
      if (variant === "solid") {
        colorClass = "text-white bg-red-500";
      } else if (variant === "outline") {
        colorClass = "text-primary border border-primary hover:bg-blue-100";
      } else if (variant === "ghost") {
        colorClass = "text-primary hover:bg-blue-100";
      } else if (variant === "link") {
        colorClass = "text-primary hover:underline";
      }
      break;
    default:
      colorClass = "";
  }

  return `${baseClass} ${colorClass}`;
};

const OurButton: React.FC<OurButtonProps> = ({
  colorScheme = "primary",
  children,
  onClick,
  type,
  isDisabled = false,
  variant = "solid",
}) => {
  const colorSchemeClass = getColorSchemeClass(
    colorScheme,
    isDisabled,
    variant
  );

  const buttonDefault = twMerge(`
    flex justify-center items-center cursor-pointer ${colorSchemeClass},
    className
    `);

  return (
    <button className={buttonDefault} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export { OurButton };
