import { IState } from '../reducers/state';
import { getFavoritesFromStorage } from '../utils';

export const getTrendingRepositories = ({ repositories, filters }: IState) => {
  if (filters.showFavorites) {
    const favs = getFavoritesFromStorage();
    return repositories.filter(repository => favs[repository.id]);
  }

  return repositories;
}
