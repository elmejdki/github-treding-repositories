import { IState } from '../reducers/state';

export const getShowFavorites = ({ filters }: IState) => {
  return filters.showFavorites;
};

export const getFilterLanguage = ({ filters }: IState) => {
  return filters.language;
};
