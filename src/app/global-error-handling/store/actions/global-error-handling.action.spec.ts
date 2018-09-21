import * as fromActions from '../actions/index';

describe('GlobalErrorAction', () => {
  describe('GlobalErrorAction', () => {
    it('should create the action', () => {
      const anError = new Error('an error');
      const action = new fromActions.GlobalErrorAction(anError);
      expect({ ...action }).toEqual({
        type: fromActions.GLOBAL_ERROR_ACTION,
        error: anError,
        payload: undefined
      });
    });
  });
});
