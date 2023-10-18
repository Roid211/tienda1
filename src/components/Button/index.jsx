import React from "react";

const Button = ({ variant, onPress, children }) => {
  return (
    <>
      {variant === "primary" && (
        <button
          onClick={onPress}
          className=" rounded-3xl max-w-fit bg-primary-main hover:border-green-500 border-2 border-primary-main hover:text-green-500 active:bg-pink-700 px-[24px] py-[8px]"
        >
          {children}
        </button>
      )}
      {variant === "secondary" && (
        <button
          onClick={onPress}
          className=" rounded-3xl text-white hover:text-red-500 active:text-pink-700 border-2 border-primary-main hover:border-red-500 active:border-pink-700 px-[24px] py-[8px]"
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;