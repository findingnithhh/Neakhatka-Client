import React, { ReactNode } from "react";

interface FloatingButtonProps {
  children: ReactNode;
  className?: string;
  colorScheme?: "primary" | "secondary" | "warning" | "danger" | "success";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const FloatingButton: React.FC<FloatingButtonProps> = ({
  children,
  className,
  position = "top-left",
  colorScheme = "primary",
  onClick,
}) => {
  const ButtonPosition = (position: string) => {
    switch (position) {
      case "top-right":
        return "top-2 right-2";
      case "bottom-left":
        return "bottom-2 left-2";
      case "bottom-right":
        return "bottom-2 right-2";
      default:
        return "top-2 left-2";
    }
  };
  const getColorSchemeClass = (colorScheme: string) => {
    switch (colorScheme) {
      case "primary":
        return "bg-[#4B9960]";
      case "secondary":
        return "bg-[#212529]";
      case "warning":
        return "bg-[#FFCC00]";
      case "danger":
        return "bg-[#FF3333]";
      case "success":
        return "bg-[#69B77E]";
      default:
        return "bg-[#ffffff]";
    }
  };

  const getButtonPosition = ButtonPosition(position);
  const colorSchemeStyle = getColorSchemeClass(colorScheme);

  return (
    <button
      onClick={onClick}
      className={`fixed text-white rounded-full w-[60px] h-[60px] flex justify-center items-center  ${colorSchemeStyle} ${getButtonPosition} ${className}`}
    >
      {children}
    </button>
  );
};

export { FloatingButton };
