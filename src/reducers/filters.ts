import { IFiltersAction, SET_LANGUAGE, SET_SHOW_FAVORITES } from "../actions/filters";

export interface IFiltersState {
  showFavorites: boolean;
  language: string;
}

const filtersReducerDefaultState: IFiltersState = {
  showFavorites: false,
  language: '',
}

const filtersReducer = (state = filtersReducerDefaultState, action: IFiltersAction) => {
  switch(action.type) {
    case SET_SHOW_FAVORITES:
      return {
        ...state,
        showFavorites: action.payload,
      };
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
}

export default filtersReducer;
