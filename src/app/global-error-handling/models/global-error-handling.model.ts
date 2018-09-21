import { Action } from '@ngrx/store';

export interface ErrorAction extends Action {
  error: Error;
  payload?: any;
}

export interface GlobalError {
  error: Error;
  actionType?: string;
  actionPayload?: any;
}
