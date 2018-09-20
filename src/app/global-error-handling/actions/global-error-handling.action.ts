import { Action } from '@ngrx/store';

export interface ErrorAction extends Action {
  error: Error;
  payload?: any;
}
