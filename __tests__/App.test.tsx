import React, { act } from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

describe('App', () => {
  it('renders correctly', async () => {
    let tree;
    await act(async () => {
      tree = renderer.create(<App />);
    });
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
