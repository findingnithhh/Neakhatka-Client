import React from "react";

interface InputSearchProps {
  placeholder: string;
  className?: string;
}
const InputSearch: React.FC<InputSearchProps> = ({
  placeholder,
  className,
}) => {
  const InputSearchStyle = `w-[450px] h-54px] py-3 px-4 border rounded-xl placeholder-[#ADB5BD] focus:outline-none focus:ring-1 focus:ring-[#343A40] focus:border-[#343A40] ${className}`;
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`${InputSearchStyle}`}
    />
  );
};
export {InputSearch}