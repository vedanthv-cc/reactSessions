import { useReducer } from "react";
import {
  TipCalculatorAction,
  TipCalculatorState,
  tipCalculatorReducer,
  initialState,
} from "./tipCalStore";

export const useTipCalculator = () => {
  const [state, dispatch] = useReducer<
    React.Reducer<TipCalculatorState, TipCalculatorAction>
  >(tipCalculatorReducer, initialState);

  const setBill = (bill: string) =>
    dispatch({ type: "SET_BILL", payload: bill });
  const setPeople = (people: number) =>
    dispatch({ type: "SET_PEOPLE", payload: people });
  const setTip = (tip: number) => dispatch({ type: "SET_TIP", payload: tip });
  const reset = () => dispatch({ type: "RESET" });

  return {
    state,
    setBill,
    setPeople,
    setTip,
    reset,
  };
};
