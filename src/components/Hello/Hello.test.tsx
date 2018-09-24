import * as React from 'react';
import { Hello } from './index';
import { shallow } from 'enzyme';
import * as renderer from 'react-test-renderer';

const incrementFn = jest.fn();
const decrementFn = jest.fn();

const component = (<Hello
  name="Test"
  enthusiasmLevel={3}
  onIncrement={incrementFn}
  onDecrement={decrementFn}
/>);

afterEach(() => {
  jest.resetAllMocks();
});

it('renders correctly', () => {
  const tree = renderer.create(component);
  expect(tree).toMatchSnapshot();
});

it('fires the increment function', () => {
  const wrapper = shallow(component);
  wrapper.find('button').first().simulate('click');

  expect(incrementFn).toHaveBeenCalled();
  expect(decrementFn).not.toHaveBeenCalled();
});

it('fires the decrement function', () => {
  const wrapper = shallow(component);
  wrapper.find('button').last().simulate('click');

  expect(decrementFn).toHaveBeenCalled();
  expect(incrementFn).not.toHaveBeenCalled();
});
