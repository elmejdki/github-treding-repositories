import {
  setShowFavorites,
  setLanguage,
  SET_SHOW_FAVORITES,
  SET_LANGUAGE,
} from '../../actions/filters';

describe('filters', () => {
  describe('setShowFavorites', () => {
    it('should setup setShowFavorites action object with provided value', () => {
      const action = setShowFavorites(true);

      expect(action).toEqual({
        type: SET_SHOW_FAVORITES,
        payload: true,
      });
    });

    it('should setup setShowFavorites action object with default value', () => {
      const action = setShowFavorites(false);

      expect(action).toEqual({
        type: SET_SHOW_FAVORITES,
        payload: false,
      });
    });
  });

  describe('setLanguage', () => {
    it('should setup setLanguage action object with provided value', () => {
      const action = setLanguage('js');

      expect(action).toEqual({
        type: SET_LANGUAGE,
        payload: 'js',
      });
    });

    it('should setup setLanguage action object with default value', () => {
      const action = setLanguage('');

      expect(action).toEqual({
        type: SET_LANGUAGE,
        payload: '',
      });
    });
  });
});
