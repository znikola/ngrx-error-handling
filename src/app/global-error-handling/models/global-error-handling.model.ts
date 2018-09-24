import { Action } from '@ngrx/store';

export interface ErrorAction extends Action {
  globalError: GlobalError;
}

export interface GlobalError {
  /** an error */
  error?: any;
  /** a failure action, usually ending with '*_FAIL' */
  actionType?: string;
  /** a customizable payload */
  actionPayload?: any;
  /** a flag whether to skip sending the error to the server */
  skipErrorHandling?: boolean;
}
