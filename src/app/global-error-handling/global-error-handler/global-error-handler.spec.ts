import { TestBed } from '@angular/core/testing';

import { GlobalErrorHandler } from './global-error-handler';
import { ErrorReportingService } from '../services/error-reporting.service';
import { Severity } from '../models/global-error-handling.model';

class ErrorReportingServiceMock {
  report(): void {}
}

describe(`GlobalErrorHandler`, () => {
  let service: GlobalErrorHandler;
  let errorReportingService: ErrorReportingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalErrorHandler, { provide: ErrorReportingService, useClass: ErrorReportingServiceMock }]
    });

    service = TestBed.get(GlobalErrorHandler);
    errorReportingService = TestBed.get(ErrorReportingService);

    spyOn(errorReportingService, 'report').and.callThrough();
  });

  describe(`when a severe error occurs`, () => {
    it(`should call reporting service`, () => {
      const error = {
        severity: Severity.Critical,
        message: 'an error',
        error: 'an error'
      };
      service.handleError({ error });
      expect(errorReportingService.report).toHaveBeenCalledWith({ error });
    });
  });

  describe(`when a warning occurs`, () => {
    it(`should NOT call reporting service`, () => {
      const error = {
        severity: Severity.Warning,
        message: 'just a warning',
        error: 'just a warning'
      };
      service.handleError({ error });
      expect(errorReportingService.report).not.toHaveBeenCalledWith({ error });
    });
  });
});
