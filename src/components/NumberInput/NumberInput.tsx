import React from "react";
import { useId } from "react";

export interface NumberInputProps extends React.ComponentProps<"input"> {
  label: string;
  iconType: "person" | "dollar";
  errorMessage?: string;
  minValue?: number;
}

const iconPaths = {
  dollar: "src/assets/dolor.svg",
  person: "src/assets/user-icon.svg",
};

export const NumberInput: React.FC<NumberInputProps> = ({
  label,
  iconType,
  errorMessage,
  minValue = 0,
  ...delegated
}) => {
  const uniqueId = useId();

  return (
    <div className=" w-full font-bold font-['Space_Mono']  min-h-[8.9rem] bg-white text-gray-700 mx-[1px]">
      <label
        className="block mb-1.5 text-[1.25rem] font-bold leading-6 tracking-[0.1em] text-gray-700"
        htmlFor={`${uniqueId}number-input`}
      >
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          id={`${uniqueId}number-input`}
          className={`w-full block text-right text-[2rem] font-bold leading-[1.5] p-[8px_20px] bg-[#f3f8fb] rounded-[6px] text-[#084643] 
                      border-2 border-transparent outline-none transition-colors duration-300 focus-visible:border-teal-600`}
          placeholder="0"
          min={minValue}
          {...delegated}
        />
        <div className="absolute top-1/2 left-5 transform -translate-y-1/2 grid place-content-center">
          <img
            src={iconPaths[iconType]}
            alt={`${iconType}-icon`}
            className={`w-${iconType === "dollar" ? 4 : 6}`}
          />
        </div>
      </div>
      {errorMessage && (
        <p className="min-h-[1.5rem] text-red-600 min-w-[150px]">
          {errorMessage}
        </p>
      )}
    </div>
  );
};
