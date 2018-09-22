import { ActionReducerMap, MemoizedSelector, createFeatureSelector } from '@ngrx/store';

import { UserState, reducer } from './user.reducer';

export interface UsersState {
  user: UserState;
}

export function getReducers(): ActionReducerMap<UsersState> {
  return {
    user: reducer
  };
}

export const getUsersState: MemoizedSelector<any, UsersState> = createFeatureSelector<UsersState>('users');
