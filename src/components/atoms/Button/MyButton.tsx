import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  colorScheme?: "primary" | "secondary" | "error" | "warning" | "success";
  onClick?: () => void;
  size?: "lg" | "md" | "sm" | "xs";
  variant?: "solid" | "outline" | "ghost" | "link";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  topIcon?: React.ReactNode;
  bottomIcon?: React.ReactNode;
  isDisabled?: boolean;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  isFileButton?: boolean;
  onFileSelect?: (file: File) => void;
  accept?: string;
  name?: string;
}

const getColorSchemeClass = (
  colorScheme: string,
  variant: string,
  isDisabled: boolean
) => {
  const baseClass = "transition-colors duration-300";
  let colorClass = "";

  if (isDisabled) {
    return `${baseClass} bg-gray-300 text-gray-500 cursor-not-allowed border rounded-lg`;
  }

  switch (colorScheme) {
    case "primary":
      if (variant === "solid") {
        colorClass = "!bg-primary text-white hover:bg-primary-200";
      } else if (variant === "outline") {
        colorClass = "text-primary border border-primary hover:bg-blue-100";
      } else if (variant === "ghost") {
        colorClass = "text-primary hover:bg-blue-100";
      } else if (variant === "link") {
        colorClass = "text-primary hover:underline";
      }
      break;

    case "secondary":
      if (variant === "solid") {
        colorClass = "!bg-secondary text-white hover:bg-secondary-200";
      } else if (variant === "outline") {
        colorClass =
          "text-secondary border border-secondary hover:bg-[#cffafe]";
      } else if (variant === "ghost") {
        colorClass = "text-secondary hover:bg-[#cffafe]";
      } else if (variant === "link") {
        colorClass = "text-secondary hover:underline";
      }
      break;

    case "error":
      if (variant === "solid") {
        colorClass = "!bg-error text-white hover:bg-error-200";
      } else if (variant === "outline") {
        colorClass = "text-error border border-error hover:bg-red-100";
      } else if (variant === "ghost") {
        colorClass = "text-error hover:bg-red-100";
      } else if (variant === "link") {
        colorClass = "text-error hover:underline";
      }
      break;

    case "warning":
      if (variant === "solid") {
        colorClass = "!bg-warning text-white hover:bg-warning-200";
      } else if (variant === "outline") {
        colorClass = "text-warning border border-warning hover:bg-yellow-100";
      } else if (variant === "ghost") {
        colorClass = "text-warning hover:bg-yellow-100";
      } else if (variant === "link") {
        colorClass = "text-warning hover:underline";
      }
      break;

    case "success":
      if (variant === "solid") {
        colorClass = "!bg-success text-white hover:bg-success-200";
      } else if (variant === "outline") {
        colorClass = "text-success border border-success hover:bg-green-100";
      } else if (variant === "ghost") {
        colorClass = "text-success hover:bg-green-100";
      } else if (variant === "link") {
        colorClass = "text-success hover:underline";
      }
      break;

    default:
      colorClass = "text-primary border border-primary hover:bg-primary-200";
  }

  return `${baseClass} ${colorClass}`;
};

const getSizeClass = (size: string) => {
  switch (size) {
    case "lg":
      return "px-6 py-3 text-xl rounded-lg";
    case "md":
      return "px-5 py-2 text-lg rounded-lg";
    case "sm":
      return "px-3 py-1 text-lg rounded-md";
    default:
      return "px-2 py-1 text-sm rounded-md";
  }
};

const MyButton: React.FC<ButtonProps> = ({
  children,
  className = "",
  colorScheme = "primary",
  onClick,
  size = "md",
  variant = "solid",
  leftIcon,
  rightIcon,
  topIcon,
  bottomIcon,
  isLoading,
  isDisabled = false,
  type = "button",
  isFileButton = false,
  onFileSelect,
  accept,
  name,
}) => {
  const colorSchemeClass = getColorSchemeClass(
    colorScheme,
    variant,
    isDisabled
  );
  // size style
  const sizeClass = getSizeClass(size);
  const variantClass = variant === "outline" ? "bg-transparent" : "";
  const cursorClass = isDisabled || isLoading ? "" : "cursor-pointer";

  const buttonClassNames = twMerge(
    `font-semibold flex flex-col items-center justify-center gap-1 ${cursorClass} ${variantClass} ${sizeClass} ${colorSchemeClass}`,
    className
  );

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];
    if (file && onFileSelect) {
      onFileSelect(file);
    }
  };

  const handleButtonClick = () => {
    if (isFileButton && fileInputRef.current) {
      fileInputRef.current.click();
    } else {
      onClick && onClick();
    }
  };

  return (
    <button
      className={buttonClassNames}
      onClick={handleButtonClick}
      type={type}
      disabled={isDisabled || isLoading}
      aria-disabled={isDisabled || isLoading ? "true" : "false"}
      name={name}
    >
      {isFileButton && (
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileInputChange}
          className="hidden"
          accept={accept}
        />
      )}

      {topIcon && (
        <div className="flex self-stretch justify-center">{topIcon}</div>
      )}
      <div className="flex items-center gap-2">
        {leftIcon}
        {isLoading ? "Loading..." : children}
        {rightIcon}
      </div>
      {bottomIcon && (
        <div className="flex self-stretch justify-center">{bottomIcon}</div>
      )}
    </button>
  );
};

export { MyButton };
