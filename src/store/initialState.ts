import { IStoreState } from "../types";

export default (): IStoreState => ({
  enthusiasmLevel: 1,
  hasInitialData: false,
  initialData: {},
  languageName: 'TypeScript',
});
