import * as ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import Home from '../../components/Home';

const renderer = ShallowRenderer.createRenderer();

it('should render Home correctly', () => {
  renderer.render(<Home />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
