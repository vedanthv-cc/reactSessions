import React, { useState, useEffect } from "react";
import styles from "./SelectTipsComponent.module.css";

export interface TipSelectorProps {
  selectedTip: number;
  onSelectTip: (tip: number) => void;
}

const tips = [5, 10, 15, 25, 50];

export const TipSelector: React.FC<TipSelectorProps> = ({
  selectedTip,
  onSelectTip,
}) => {
  const [customTip, setCustomTip] = useState<string>("");

  // Handle custom input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomTip(e.target.value);
  };

  // Handle custom input blur (when the input loses focus)
  const handleInputBlur = () => {
    const value = parseInt(customTip, 10);
    if (!isNaN(value) && value > 0) {
      onSelectTip(value);
    }
  };

  useEffect(() => {
    if (tips.includes(selectedTip)) {
      setCustomTip(""); // Clear custom tip if a predefined tip is selected
    } else {
      setCustomTip(String(selectedTip)); // Set custom tip if selectedTip is custom
    }
  }, [selectedTip]);

  return (
    <div className={styles.container}>
      <label className={styles.label}>Select Tip %</label>
      <div className={styles.tipButtons}>
        {tips.map((tip) => (
          <button
            key={tip}
            className={`${styles.tipButton} ${selectedTip === tip ? styles.selected : ""}`}
            onClick={() => onSelectTip(tip)}
          >
            {tip}%
          </button>
        ))}

        <input
          type="number"
          className={` ${styles.customInput} ${
            !tips.includes(selectedTip) ? styles.customButton : ""
          }`}
          placeholder="Custom"
          min={0}
          max={100}
          value={customTip}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onFocus={() => setCustomTip(customTip)}
        />
      </div>
    </div>
  );
};
