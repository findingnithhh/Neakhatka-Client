import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder: string;
  className?: string;
}
const Input: React.FC<InputProps> = ({
  placeholder,
  className,
  type,
  ...rest
}) => {
  const inputStyle = `border rounded-lg px-3 py-2 w-[350px] h-[35px] placeholder-[#ADB5BD] focus:outline-none focus:border-[#343A40] ${className}`;
  return (
    <input
      className={`${inputStyle}`}
      placeholder={placeholder}
      type={type}
      {...rest}
    />
  );
};
export { Input };
