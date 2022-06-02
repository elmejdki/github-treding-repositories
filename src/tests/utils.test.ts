import { getDate } from '../utils/index';

describe('global utils functions', () => {
  describe('getDate', () => {
    it('Should return the correct date with 7 days difference', () => {
      expect(getDate(1654135899762, 7)).toEqual('2022-05-26');
    });
    it('Should return the correct date with 1 day difference', () => {
      expect(getDate(1654135899762, 1)).toEqual('2022-06-01');
    });
  });
});
