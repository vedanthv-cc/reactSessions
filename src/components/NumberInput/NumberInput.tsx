import React from "react";
import { useId } from "react";
import styles from "./NumberInput.module.css";

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
    <div className={styles.container}>
      <label className={styles.label} htmlFor={`${uniqueId}number-input`}>
        {label}
      </label>
      <div className={styles.inputContainer}>
        <input
          type="number"
          id={`${uniqueId}number-input`}
          className={styles.numberInput}
          placeholder="0"
          min={minValue}
          {...delegated}
        />
        <div className={styles.iconContainer}>
          <img
            src={iconPaths[iconType]}
            alt={`${iconType}-icon`}
            style={{ width: iconType === "dollar" ? "16px" : "14px" }} // Adjust icon sizes
          />
        </div>
      </div>
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
};
