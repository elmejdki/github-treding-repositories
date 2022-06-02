import * as ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { Provider } from 'react-redux';
import LanguageFilter from '../../components/RepositoryListFilters/LanguageFilter';
import createMockStore from '../utils';

const renderer = ShallowRenderer.createRenderer();

it('should render LanguageFilter correctly', () => {
  const store = createMockStore();
  renderer.render(
    <Provider store={store}>
      <LanguageFilter />
    </Provider>
  );

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
