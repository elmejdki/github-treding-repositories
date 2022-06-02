export const SET_SHOW_FAVORITES = 'filters/SET_SHOW_FAVORITES';
export const SET_LANGUAGE = 'filters/SET_LANGUAGE';
const INIT_ACTION = '@@INIT';

interface IInitAction {
  type: typeof INIT_ACTION;
}

export interface ISetShowFavorites {
  payload: boolean;
  type: typeof SET_SHOW_FAVORITES;
}

export interface ISetLanguage {
  payload: string;
  type: typeof SET_LANGUAGE;
}

export type IFiltersAction = (
  IInitAction |
  ISetShowFavorites |
  ISetLanguage
);

export const setShowFavorites = (payload: boolean): ISetShowFavorites => ({
  type: SET_SHOW_FAVORITES,
  payload,
});

export const setLanguage = (payload: string): ISetLanguage => ({
  type: SET_LANGUAGE,
  payload,
});
