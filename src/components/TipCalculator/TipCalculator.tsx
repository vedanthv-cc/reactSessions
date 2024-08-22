import React from "react";
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
    <div className="flex justify-center items-center bg-gray-100 p-5 m-0 mx-auto rounded-lg shadow-lg min-w-[375px] min-h-screen flex-wrap">
      <div className="flex flex-col lg:flex-row justify-center bg-white p-5 rounded-lg shadow-lg max-w-[1158px] w-full h-full">
        <div className="flex flex-col justify-between w-full lg:w-[48%] mb-5 lg:mb-0">
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
        <div className="flex flex-col justify-between w-full lg:w-[48%] bg-primary-color p-5 rounded-lg">
          <TipAmountDisplay
            label="Tip Amount"
            amount={tipPercentage > 0 ? tipAmount : 0.0}
          />
          <TipAmountDisplay
            label="Total"
            amount={billAmount > 0 ? totalAmount : 0.0}
          />
          <button
            className="mt-20 bg-reset-btn-bg border-none text-gray-800 p-2.5 rounded-md cursor-pointer w-[90%] text-lg font-bold text-center mb-10 hover:bg-reset-btn-hover-bg"
            onClick={reset}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};
