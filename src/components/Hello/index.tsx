import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  decrementEnthusiasm,
  IEnthusiasmAction,
  incrementEnthusiasm,
} from '../../store/actions';
import { IStoreState } from '../../types';

interface IProps {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

export const Hello: React.StatelessComponent<IProps> = ({
  name,
  enthusiasmLevel,
  onIncrement,
  onDecrement,
}) => (
  <div className="hello">
    <p>Hello {name} {enthusiasmLevel}!</p>
    <div>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  </div>
);

const mapStateToProps = ({ enthusiasmLevel, languageName}: IStoreState) => ({
  enthusiasmLevel,
  name: languageName,
});

const mapDispatchToProps = (dispatch: Dispatch<IEnthusiasmAction>) => ({
  onDecrement: () => dispatch(decrementEnthusiasm()),
  onIncrement: () => dispatch(incrementEnthusiasm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hello as any);
