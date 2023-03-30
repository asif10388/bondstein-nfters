import Image from "next/image";
import { useState } from "react";
import Button from "./Button";

interface ITextInputProps {
  placeholder: string;
  classNames?: string;
  hasIcon?: boolean;
  hasButton?: boolean;
  buttonText?: string;
}

export const TextInput = ({
  placeholder,
  classNames,
  hasIcon,
  hasButton,
  buttonText,
}: ITextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`${
        isFocused ? `border-nft-blue` : `border-gray-100`
      } transition-colors ease-in duration-200 h-full flex items-center border-2 rounded-full py-2 px-4 ${classNames}`}
    >
      <input
        placeholder={placeholder}
        type="text"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full text-xs md:text-sm font-dm-sans focus:outline-none`}
      />
      {hasIcon && (
        <Image
          priority
          src="/images/search-icon.svg"
          height={28}
          width={28}
          alt={placeholder}
        />
      )}

      {hasButton && (
        <Button
          tertiary
          classNames="transition-colors ease-in duration-200 hover:bg-nft-dark-blue ml-4 whitespace-nowrap"
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
};
