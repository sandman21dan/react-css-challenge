export const INCREMENT_ENTHUSIASM = 'INCREMENT_ENTHUSIASM';
export const DECREMENT_ENTHUSIASM = 'DECREMENT_ENTHUSIASM';
export const FETCH_INITAL_DATA = 'FETCH_INITAL_DATA';
export const FETCH_INITAL_DATA_SUCCESS = 'FETCH_INITAL_DATA_SUCCESS';

export interface IBasicAction {
  type: string;
}

export interface IEnthusiasmAction extends IBasicAction {}

export const incrementEnthusiasm = (): IEnthusiasmAction => ({
  type: INCREMENT_ENTHUSIASM,
});

export const decrementEnthusiasm = (): IEnthusiasmAction => ({
  type: DECREMENT_ENTHUSIASM,
});

export interface IFetchInitialData extends IBasicAction {}
export interface IFetchInitialDataSuccess extends IBasicAction {
  payload: object;
}

export const fetchInitialData = (): IFetchInitialData => ({
  type: FETCH_INITAL_DATA,
});

export const fetchInitialDataSuccess = (payload: object): IFetchInitialDataSuccess => ({
  payload,
  type: FETCH_INITAL_DATA_SUCCESS,
});
