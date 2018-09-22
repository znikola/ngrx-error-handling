import * as fromActions from '../actions/index';
import { GlobalError } from '../../models/global-error-handling.model';

describe('GlobalErrorHandlingAction', () => {
  it('should create the action', () => {
    const anError = new Error('an error');
    const action = new fromActions.GlobalErrorAction({ error: anError });
    expect({ ...action }).toEqual({
      type: fromActions.GLOBAL_ERROR_ACTION,
      globalError: {
        error: anError
      }
    });
  });
});
