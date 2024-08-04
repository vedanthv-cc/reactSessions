import React from "react";
import styles from "./AmountDisplay.module.css";

export interface TipAmountDisplayProps {
  label: string;
  amount: number;
}

export const TipAmountDisplay: React.FC<TipAmountDisplayProps> = ({
  label,
  amount,
}) => {
  return (
    <div className={styles.displayContainer}>
      <div className={styles.label}>
        {label} <br />/ person
      </div>
      <div className={styles.amount}>${amount.toFixed(2)}</div>
    </div>
  );
};
