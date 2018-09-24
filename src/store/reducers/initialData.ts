import { IFetchInitialDataSuccess, FETCH_INITAL_DATA_SUCCESS } from "../actions";

export const initialData = (
  state: object = {},
  action: IFetchInitialDataSuccess,
) => {
  switch (action.type) {
    case FETCH_INITAL_DATA_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export const hasInitialData = (
  state: boolean = false,
  action: IFetchInitialDataSuccess
) => {
  switch (action.type) {
    case FETCH_INITAL_DATA_SUCCESS:
      return true;
    default:
      return state;
  }
};
