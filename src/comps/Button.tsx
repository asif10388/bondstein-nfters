import React from "react";

interface IButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  classNames?: string;
}

const Button = ({
  primary,
  secondary,
  tertiary,
  classNames,
  children,
}: IButtonProps) => {
  return (
    <button
      className={`transition ease-in duration-200 font-bold text-sm md:text-base inline-flex justify-center items-center py-2 md:py-3 px-5 md:px-10 focus:outline-red-400 rounded-full
      ${primary && `bg-nft-purple hover:bg-dark-nft-purple text-white`}
      ${
        secondary &&
        `border-4 border-nft-purple text-nft-purple hover:text-white hover:bg-nft-purple`
      }
      ${tertiary && `text-white bg-nft-blue`}
      ${classNames}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
