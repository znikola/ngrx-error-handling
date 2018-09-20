import { ActionReducerMap } from '@ngrx/store';

import { UserState, reducer } from './user.reducer';

export interface UsersState {
  user: UserState;
}

export function getReducers(): ActionReducerMap<UsersState> {
  return {
    user: reducer
  };
}
