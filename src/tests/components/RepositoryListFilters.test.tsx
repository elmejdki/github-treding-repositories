import * as ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { Provider } from 'react-redux';
import RepositoryListFilters from '../../components/RepositoryListFilters';
import createMockStore from '../utils';

const renderer = ShallowRenderer.createRenderer();

it('should render RepositoryListFilters correctly', () => {
  const store = createMockStore();
  renderer.render(
    <Provider store={store}>
      <RepositoryListFilters />
    </Provider>
  );

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
