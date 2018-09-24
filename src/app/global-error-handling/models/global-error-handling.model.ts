import { Action } from '@ngrx/store';

export interface ErrorAction extends Action {
  globalError: GlobalError;
}

/** Severity determines should the error be sent to the server */
export enum Severity {
  /** critical error are always sent to the server */
  Critical = 1,
  /** warnings are just console.loged */
  Warning
}

export interface GlobalError {
  error?: {
    /** severity will determine should the error be sent to the server */
    severity: Severity;
    /** an error description */
    message: string;
    /** an error itself */
    error?: any;
  };
  /** a failure action, usually ending with '*_FAIL' */
  actionType?: string;
  /** a customizable payload */
  actionPayload?: any;
}
