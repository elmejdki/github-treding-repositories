import * as ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { Provider } from 'react-redux';
import RepositoryList from '../../components/RepositoryList';
import createMockStore from '../utils';

const renderer = ShallowRenderer.createRenderer();

it('should render RepositoryList correctly', () => {
  const store = createMockStore();
  renderer.render(
    <Provider store={store}>
      <RepositoryList />
    </Provider>
  );

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
