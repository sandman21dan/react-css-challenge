import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { HasInitialData } from '.';

it('renders correctly when no data', () => {
  const tree = renderer.create(<HasInitialData hasInitialData={false}/>).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly when there is data', () => {
  const tree = renderer.create(<HasInitialData hasInitialData={true}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
