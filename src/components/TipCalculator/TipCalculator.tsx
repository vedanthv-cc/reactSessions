import React, { useState } from "react";
import styles from "./TipCalculator.module.css";
import { NumberInput } from "../NumberInput/NumberInput";
import { TipSelector } from "../SelectTipsComponent/SelectTipsComponent";

export const TipCalculator: React.FC = () => {
  const [bill, setBill] = useState<number>(0);
  const [billTouched, setBillTouched] = useState<boolean>(false);
  const [people, setPeople] = useState<number>(1);
  const [tip, setTip] = useState<number>(0);

  const handleReset = () => {
    setBill(0);
    setBillTouched(false);
    setPeople(1);
    setTip(0);
  };

  const tipAmount = (bill * (tip / 100)) / people;
  const totalAmount = (bill + tipAmount * people) / people;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <NumberInput
          label="Bill"
          iconType="dollar"
          value={bill.toString()}
          onChange={(e) => setBill(Number(e.target.value))}
          onBlur={() => setBillTouched(true)}
          errorMessage={
            billTouched && bill <= 0 ? "Value must be greater than 0" : ""
          }
        />
        <TipSelector
          selectedTip={tip}
          onSelectTip={(tip: number) => {
            setTip(tip);
          }}
        />{" "}
        <NumberInput
          label="Number of People"
          iconType="person"
          value={people.toString()}
          onChange={(e) => setPeople(Number(e.target.value))}
          errorMessage={people < 1 ? "Must be at least 1" : ""}
        />
      </div>
    </div>
  );
};
