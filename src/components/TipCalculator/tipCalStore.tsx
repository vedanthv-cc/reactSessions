export type TipCalculatorAction =
  | { type: "SET_BILL"; payload: string }
  | { type: "SET_PEOPLE"; payload: number }
  | { type: "SET_TIP"; payload: number }
  | { type: "RESET" };

export type TipCalculatorState = {
  bill: string;
  people: number;
  tip: number;
};

export const initialState: TipCalculatorState = {
  bill: "",
  people: 1,
  tip: 0,
};

export const tipCalculatorReducer = (
  state: TipCalculatorState,
  action: TipCalculatorAction
): TipCalculatorState => {
  switch (action.type) {
    case "SET_BILL":
      return { ...state, bill: action.payload };
    case "SET_PEOPLE":
      return { ...state, people: action.payload };
    case "SET_TIP":
      return { ...state, tip: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
