import Image from "next/image";
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
  return (
    <div
      className={`h-full flex items-center border-2 border-gray-100 rounded-full py-3 px-5 ${classNames}`}
    >
      <input
        placeholder={placeholder}
        type="text"
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
        <Button tertiary classNames="ml-4 whitespace-nowrap">
          {buttonText}
        </Button>
      )}
    </div>
  );
};
