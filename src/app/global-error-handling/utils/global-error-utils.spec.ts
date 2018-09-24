import { GlobalErrorUtils } from './global-error-utils';
import { GlobalError, Severity } from '../models/global-error-handling.model';

describe('isGlobalError', () => {
  it(`should return 'true' for a globalError with 'error' property`, () => {
    const globalErrorMock: GlobalError = {
      error: {
        severity: Severity.Critical,
        message: 'an error',
        error: 'an error'
      }
    };

    expect(GlobalErrorUtils.isGlobalError(globalErrorMock)).toEqual(true);
  });
  it(`should return 'false' for a globalError without 'error' property`, () => {
    const globalErrorMock: GlobalError = {
      actionPayload: 'random payload'
    };

    expect(GlobalErrorUtils.isGlobalError(globalErrorMock)).toEqual(false);
  });
});
