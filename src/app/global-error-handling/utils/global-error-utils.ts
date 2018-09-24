import { GlobalError } from '../models/global-error-handling.model';

export class GlobalErrorUtils {
  static isGlobalError(globalError: GlobalError): boolean {
    return (
      Boolean(globalError) &&
      Boolean(globalError.error) &&
      Boolean(Object.keys(globalError).length !== 0) &&
      Boolean(Object.keys(globalError.error).length !== 0)
    );
  }
}
