import React, { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
  align?: "left" | "center" | "right" | "justify";
  fontSize?: "xs" | "sm" | "base" | "md" | "xl" | "2xl" | "5xl" | "text-title";
  variant?:
    | "thin"
    | "extralight"
    | "light"
    | "medium"
    | "bold"
    | "extrabold"
    | "black"
    | "normal";
}

const Typography: React.FC<TypographyProps> = ({
  children,
  className,
  align = "left",
  fontSize = "base",
  variant = "normal",
}) => {
  const textAlign = (align: string) => {
    switch (align) {
      case "left":
        return "text-left";
      case "right":
        return "text-right";
      case "justify":
        return "text-justify";
      default:
        return "text-center";
    }
  };
  const textfontSize = (fontSize: string) => {
    switch (fontSize) {
      case "xs":
        // 12px
        return "text-xs";
      case "sm":
        // 14px
        return "text-sm";
      case "lg":
        // 18
        return "text-xl";
      case "xl":
        // 20px
        return "text-xl";
      case "2xl":
        // 24px
        return "text-2xl";
      case "text-title":
        return "text-[38px]";
      case "5xl":
        return "text-[48px]";
      default:
        // 16px
        return "text-base";
    }
  };
  const textVariant = (variant: string) => {
    switch (variant) {
      case "thn":
        // 100
        return "font-thin";
      case "extralight":
        // 200
        return "font-extralight";
      case "light":
        // 300
        return "font-light";
      case "medium":
        // 400
        return "font-medium";
      case "semibold":
        // 600
        return "font-semibold";
      case "bold":
        // 700
        return "font-bold";
      case "extrabold":
        // 800
        return "font-extrabold";
      case "black":
        // 900
        return "font-black";
      default:
        // 500
        return "normal";
    }
  };
  const textAlignStyle = textAlign(align);
  const textfontSizeStyle = textfontSize(fontSize);
  const textVariantStyle = textVariant(variant);
  return (
    <div
      className={`${textAlignStyle} ${textfontSizeStyle} ${textVariantStyle} ${className}`}
    >
      {children}
    </div>
  );
};
export { Typography };
