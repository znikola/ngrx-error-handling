import { Injectable, Injector, ErrorHandler } from '@angular/core';

import { ErrorReportingService } from '../services/error-reporting.service';
import { GlobalError, Severity } from '../models/global-error-handling.model';
import { GlobalErrorUtils } from '../utils/global-error-utils';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(globalError: GlobalError): void {
    console.log('Caught a global error: ', globalError);

    if (GlobalErrorUtils.isGlobalError(globalError) && globalError.error.severity === Severity.Critical) {
      const errorReportingService = this.injector.get(ErrorReportingService);
      errorReportingService.report(globalError);
    }
  }
}
