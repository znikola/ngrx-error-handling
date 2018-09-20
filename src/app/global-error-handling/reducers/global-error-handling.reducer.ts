import { ActionReducer } from '@ngrx/store';

import { ErrorAction } from '../actions/global-error-handling.action';

export function errorHandler(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action: ErrorAction) {
    if (action.error) {
      console.error(`Error caught:`, action.error);
    }
    return reducer(state, action);
  };
}
