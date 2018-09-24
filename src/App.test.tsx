import * as React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

it('renders without crashing', () => {
  const wrapper = shallow(<App/>);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('calls function on init', () => {
  const testFn = jest.fn();
  shallow(<App onInit={testFn}/>);

  expect(testFn).toHaveBeenCalled();
});
