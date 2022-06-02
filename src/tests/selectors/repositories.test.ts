import { getTrendingRepositories } from '../../selectors/repositories';
import { REPOSITORIES_STATE, FILTERS_STATE } from '../state';

describe('getTrendingRepositories', () => {
  beforeAll(() => {
    localStorage.setItem('favorites', JSON.stringify({ 497905406: true }));
  });

  it('Should return the whole treding repos, if showFavorites was false', () => {
    const result = getTrendingRepositories({
      repositories: [...REPOSITORIES_STATE],
      filters: { ...FILTERS_STATE },
    });

    expect(result.length).toEqual(4);
  });

  it('Should filter the repositories, if showFavorites was true', () => {
    const result = getTrendingRepositories({
      repositories: [...REPOSITORIES_STATE],
      filters: { ...FILTERS_STATE, showFavorites: true },
    });

    expect(result.length).toEqual(1);
  });
});
