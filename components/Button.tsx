import React, { ComponentPropsWithoutRef } from "react";

const Button: React.FC<ComponentPropsWithoutRef<"button">> = ({
  className,
  children,
  ...buttonProps
}) => {
  return (
    <button      
      className={`${className} focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
