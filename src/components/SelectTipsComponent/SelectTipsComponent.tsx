import React, { useState, useEffect } from "react";

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
  const [hasInteracted, setHasInteracted] = useState<boolean>(false); // Track user interaction

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasInteracted(true); // User has interacted with the input
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
    setHasInteracted(true); // User has interacted with the buttons
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
    <div className="w-full font-bold font-['Space_Mono']">
      <label className="block mb-1.5 text-gray-600 text-lg md:text-xl tracking-wider">
        Select Tip %
      </label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {tips.map((tip) => (
          <button
            key={tip}
            className={`text-center py-2 px-4 rounded-lg text-white text-xl md:text-2xl font-bold cursor-pointer transition-colors duration-300 ${
              selectedTip === tip
                ? "bg-teal-500"
                : "bg-teal-700 hover:bg-teal-500"
            }`}
            onClick={() => handleTipClick(tip)}
          >
            {tip}%
          </button>
        ))}

        <input
          type="text"
          className={`w-full py-2 px-4 rounded-lg text-center text-xl md:text-2xl font-bold text-black bg-gray-100 border-2 border-transparent outline-none focus:border-teal-500 ${
            !tips.includes(selectedTip) ? "bg-teal-100" : ""
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
      {/* Ensure min-height to prevent content shifting */}
      <div className="mt-1.5 h-6">
        {hasInteracted && selectedTip === 0 && customTip === "" && (
          <p className="text-red-600 text-sm md:text-base">
            Please select a tip
          </p>
        )}
      </div>
    </div>
  );
};
