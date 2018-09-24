import {
  IEnthusiasmAction,
  INCREMENT_ENTHUSIASM,
  DECREMENT_ENTHUSIASM
} from "../actions";

export const enthusiasmLevel = (
  state: number = 1,
  action: IEnthusiasmAction,
) => {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return state + 1;
    case DECREMENT_ENTHUSIASM:
      return state - 1;
    default:
      return state;
  }
};
