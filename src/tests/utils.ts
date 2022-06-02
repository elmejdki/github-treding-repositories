import configureMockStore from 'redux-mock-store'
import { FILTERS_STATE, REPOSITORIES_STATE } from './state';

export const createDefaultState = () => ({
  repositories: [...REPOSITORIES_STATE],
  filters: {
    ...FILTERS_STATE,
  },
});

const createMockStore = (state = createDefaultState()) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const middlewares: any[] = []; // TODO
  const mockStore = configureMockStore(middlewares);
  return mockStore(state);
};

export default createMockStore;
