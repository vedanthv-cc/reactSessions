import React, { useState, useEffect } from "react";
import styles from "./SelectTipsComponent.module.css";

export interface TipSelectorProps {
  selectedTip: number;
  onSelectTip: (tip: string) => void;
}

const tips = [5, 10, 15, 25, 50];

export const TipSelector: React.FC<TipSelectorProps> = ({
  selectedTip,
  onSelectTip,
}) => {
  const [customTip, setCustomTip] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setCustomTip(value);
    }
  };

  const handleInputBlur = () => {
    const value = parseInt(customTip, 10);
    if (!isNaN(value) && value > 0) {
      onSelectTip(value.toString());
    }
  };

  const handleTipClick = (tip: number) => {
    if (selectedTip === tip) {
      onSelectTip("");
    } else {
      onSelectTip(tip.toString());
    }
  };

  useEffect(() => {
    if (selectedTip === 0) {
      setCustomTip("");
    } else if (tips.includes(selectedTip)) {
      setCustomTip("");
    } else if (selectedTip > 0) {
      setCustomTip(String(selectedTip));
    }
  }, [selectedTip]);

  return (
    <div className={styles.container}>
      <label className={styles.label}>Select Tip %</label>
      <div className={styles.tipButtons}>
        {tips.map((tip) => (
          <button
            key={tip}
            className={`${styles.tipButton} ${
              selectedTip === tip ? styles.selected : ""
            }`}
            onClick={() => handleTipClick(tip)}
          >
            {tip}%
          </button>
        ))}

        <input
          type="text"
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
