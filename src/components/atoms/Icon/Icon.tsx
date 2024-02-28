import React from "react";
import { IconItems } from "./IconItem";

interface IconProps {
  className?: string;
  label: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  colorBackground?: "red" | "blue" | "green" | "yellow";
}

export default function Icon({
  className,
  label,
  size = "md",
  colorBackground = "red",
}: IconProps) {
  const IconSize = (size: string) => {
    switch (size) {
      case "xs":
        return "w-[14px] h-[14px]";
      case "sm":
        return "w-[16px] h-[16px]";
      case "lg":
        return "w-[30px] h-[30px]";
      case "xl":
        return "w-[42px] h-[42px]";
      default:
        return "w-[24px] h-[24px]";
    }
  };
  const IconColorBackground = (colorBackground: string) => {
    switch (colorBackground) {
      case "blue":
        return `#005AB5`;
      case "green":
        return `#4B9960`;
      case "yellow":
        return `#FFA826`;
      default:
        return `#E01507`;
    }
  };
  const IconSizeStyle = IconSize(size);
  const IconColorBackgroundStyle = IconColorBackground(colorBackground);
  const classname = `${IconSizeStyle}`;

  const findIcon = (label: string) => {
    const result = IconItems.filter((eachIcon) => eachIcon.label === label);

    return (
      result &&
      result.length > 0 &&
      result[0].icon({
        className: ` ${classname}`,
        // border: "#FD5858",
        background: `${IconColorBackgroundStyle}`,
      })
    );
  };

  return <div className={`${className}`}>{findIcon(label)}</div>;
}
