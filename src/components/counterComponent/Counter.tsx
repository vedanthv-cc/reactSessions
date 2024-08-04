import React, { useState, useEffect } from "react";
import styles from "./Counter.module.css";

export interface CounterProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  scale?: number; // Optional scale prop for increment/decrement
}

export const Counter: React.FC<CounterProps> = ({
  count,
  setCount,
  scale = 1,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    if (!isNaN(newValue)) {
      setCount(newValue);
    } else {
      // Handle invalid input (e.g., display error message)
      console.error("Invalid input: Please enter a number.");
    }
  };
  return (
    <div className={styles.counter}>
      <button
        className="button"
        onClick={() => setCount((count) => count - scale)}
      >
        -
      </button>
      <input
        type="number"
        className="count"
        value={count}
        onChange={(e) => {
          setCount(e.target.valueAsNumber);
        }}
      />
      <button
        className="button"
        onClick={() => setCount((count) => count + scale)}
      >
        +
      </button>
    </div>
  );
};
