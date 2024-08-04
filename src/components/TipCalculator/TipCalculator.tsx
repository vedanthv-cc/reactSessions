import React from "react";
import styles from "./TipCalculator.module.css";
import { NumberInput } from "../NumberInput/NumberInput";
import { TipSelector } from "../SelectTipsComponent/SelectTipsComponent";
import { TipAmountDisplay } from "../AmountDisplay/AmountDisplay";
import { useTipCalculator } from "./useTipCalculator";

export const TipCalculator: React.FC = () => {
  const { state, setBill, setPeople, setTip, reset } = useTipCalculator();

  const billAmount = Number(state.bill) || 0;
  const tipPercentage = Number(state.tip) || 0;
  const numberOfPeople = state.people > 0 ? state.people : 1;

  const tipAmount = (billAmount * (tipPercentage / 100)) / numberOfPeople;
  const totalAmount =
    (billAmount + tipAmount * numberOfPeople) / numberOfPeople;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.inputsContainer}>
          <NumberInput
            label="Bill"
            iconType="dollar"
            value={state.bill.toString()}
            onChange={(e) => setBill(e.target.value)}
            onBlur={() => setBill(state.bill)}
            errorMessage={
              billAmount < 1 && state.bill !== ""
                ? "Amount must be greater than 0"
                : ""
            }
          />
          <TipSelector
            selectedTip={tipPercentage}
            onSelectTip={(tip: string) => setTip(parseInt(tip, 10))}
          />
          <NumberInput
            label="Number of People"
            iconType="person"
            value={state.people.toString()}
            onChange={(e) => setPeople(Number(e.target.value))}
            errorMessage={state.people < 1 ? "Must be at least 1" : ""}
          />
        </div>
        <div className={styles.outputsContainer}>
          <TipAmountDisplay
            label="Tip Amount"
            amount={tipPercentage > 0 ? tipAmount : 0.0}
          />
          <TipAmountDisplay
            label="Total"
            amount={billAmount > 0 ? totalAmount : 0.0}
          />
          <button className={styles.resetButton} onClick={reset}>
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};
