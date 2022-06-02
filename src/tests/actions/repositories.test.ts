import {
  requestRepositoriesFetch,
  setTrendingRepositories,
  REPOSITORIES_FETCH_REQUEST,
  SET_TRENDING_REPOSITORIES,
} from '../../actions/repositories';
import { REPOSITORIES_STATE } from '../state';

describe('repositories', () => {
  describe('requestRepositoriesFetch', () => {
    it('Should return the correct action body for requestRepositoriesFetch', () => {
      const action = requestRepositoriesFetch();

      expect(action).toEqual({
        type: REPOSITORIES_FETCH_REQUEST,
      });
    });
  });

  describe('setTrendingRepositories', () => {
    it('Should setup setTrendingRepositories action object with provided value', () => {
      const action = setTrendingRepositories([]);

      expect(action).toEqual({
        type: SET_TRENDING_REPOSITORIES,
        payload: [],
      });
    });

    it('Should setup setTrendingRepositories action object with default value', () => {
      const action = setTrendingRepositories([...REPOSITORIES_STATE]);

      expect(action).toEqual({
        type: SET_TRENDING_REPOSITORIES,
        payload: [
          ...REPOSITORIES_STATE,
        ],
      });
    });
  });
});
