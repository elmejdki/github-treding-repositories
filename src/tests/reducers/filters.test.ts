import { SET_LANGUAGE, SET_SHOW_FAVORITES } from '../../actions/filters';
import filtersReducer from '../../reducers/filters';
import { FILTERS_STATE } from '../state';

describe('repositoriesReducer', () => {
  it('Should set default state', () => {
    const action = {
      type: '@@INIT',
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const state = filtersReducer(undefined, action);

    expect(state).toEqual({
      showFavorites: false,
      language: '',
    });
  });

  it('Should set language filter to python', () => {
    const state = filtersReducer(FILTERS_STATE, {
      type: SET_LANGUAGE,
      payload: 'python',
    });

    expect(state.language).toEqual('python');
  });

  it('Should set language filter to an empty string', () => {
    const state = filtersReducer(FILTERS_STATE, {
      type: SET_LANGUAGE,
      payload: '',
    });

    expect(state.language).toEqual('');
  });

  it('Should set showFavorites to true', () => {
    const state = filtersReducer(FILTERS_STATE, {
      type: SET_SHOW_FAVORITES,
      payload: true,
    });

    expect(state.showFavorites).toEqual(true);
  });

  it('Should set showFavorites to false', () => {
    const state = filtersReducer(FILTERS_STATE, {
      type: SET_SHOW_FAVORITES,
      payload: false,
    });

    expect(state.showFavorites).toEqual(false);
  });
});
