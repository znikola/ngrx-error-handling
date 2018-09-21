import { Injectable, Injector, ErrorHandler } from '@angular/core';

import { ErrorReportingService } from '../services/error-reporting.service';
import { GlobalError } from '../models/global-error-handling.model';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(globalError: GlobalError): void {
    console.error('Caught a global error: ', globalError);
    const errorReportingService = this.injector.get(ErrorReportingService);
    errorReportingService.report(globalError);
  }
}
