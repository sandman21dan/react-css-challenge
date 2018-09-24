import { combineReducers } from "redux";
import { IStoreState } from "../../types";
import { enthusiasmLevel } from "./enthusiasmLevel";
import { initialData, hasInitialData } from "./initialData";

export const languageName = (state: string = 'TypeScript', action?: any) => state;

export default combineReducers<IStoreState>({
  enthusiasmLevel,
  hasInitialData,
  initialData,
  languageName,
});
