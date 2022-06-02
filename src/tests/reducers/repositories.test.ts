import { SET_TRENDING_REPOSITORIES } from '../../actions/repositories';
import repositoriesReducer from '../../reducers/repositories';
import { REPOSITORIES_STATE } from '../state';

describe('repositoriesReducer', () => {
  it('Should set default state', () => {
    const action = {
      type: '@@INIT',
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const state = repositoriesReducer(undefined, action);

    expect(state).toEqual([]);
  });

  it('Should add Repositories to the store', () => {
    const state = repositoriesReducer([], {
      type: SET_TRENDING_REPOSITORIES,
      payload: REPOSITORIES_STATE,
    });

    expect(state).toEqual(REPOSITORIES_STATE);
  });
});
