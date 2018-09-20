import { Action } from '@ngrx/store';

import { ErrorAction } from '../../../global-error-handling/store/global-error-handling.model';

export const LOAD_USER = '[USER] Load User';
export const LOAD_USER_SUCCESS = '[USER] Load User Success';
export const LOAD_USER_FAIL = '[USER] Load User Fail';

export class LoadUser implements Action {
  readonly type = LOAD_USER;
  constructor(public id: number) {}
}

export class LoadUserSuccess implements Action {
  readonly type = LOAD_USER_SUCCESS;
  constructor(public payload: any) {}
}

export class LoadUserFail implements ErrorAction {
  readonly type = LOAD_USER_FAIL;
  constructor(public error: Error, public payload?: any) {}
}

export type UserActions = LoadUser | LoadUserSuccess | LoadUserFail;
