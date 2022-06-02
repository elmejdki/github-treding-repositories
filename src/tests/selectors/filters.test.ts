import { getShowFavorites, getFilterLanguage } from '../../selectors/filters';
import { REPOSITORIES_STATE, FILTERS_STATE } from '../state';

describe('filters', () => {
  describe('getShowFavorites', () => {
    it('Should return false if the value on the store is false', () => {
      const result = getShowFavorites({
        repositories: [...REPOSITORIES_STATE],
        filters: { ...FILTERS_STATE },
      });
  
      expect(result).toEqual(false);
    });
  
    it('Should return true if the value on the store is true', () => {
      const result = getShowFavorites({
        repositories: [...REPOSITORIES_STATE],
        filters: { ...FILTERS_STATE, showFavorites: true },
      });
  
      expect(result).toEqual(true);
    });
  });

  describe('getFilterLanguage', () => {
    it('Should return js since the store has a js value', () => {
      const result = getFilterLanguage({
        repositories: [...REPOSITORIES_STATE],
        filters: { ...FILTERS_STATE },
      });
  
      expect(result).toEqual('js');
    });
  
    it('Should return empty string cause the store has an empty string', () => {
      const result = getFilterLanguage({
        repositories: [...REPOSITORIES_STATE],
        filters: { ...FILTERS_STATE, language: '' },
      });
  
      expect(result).toEqual('');
    });
  });
});

