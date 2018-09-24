import { enthusiasmLevel } from '../enthusiasmLevel';
import { incrementEnthusiasm, decrementEnthusiasm } from '../../actions';

it('increments enthusiasm', () => {
  expect(
    enthusiasmLevel(3 ,incrementEnthusiasm())
  ).toEqual(4);
});

it('decrements enthusiasm', () => {
  expect(
    enthusiasmLevel(5, decrementEnthusiasm())
  ).toEqual(4);
});
