import { ErrorAction } from '../global-error-handling.model';

export const GLOBAL_ERROR_ACTION = '[ERROR] Global Error Action';

export class GlobalErrorAction implements ErrorAction {
  readonly type = GLOBAL_ERROR_ACTION;
  constructor(public error: Error, public payload?: any) {}
}
