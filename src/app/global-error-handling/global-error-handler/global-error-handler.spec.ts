import { TestBed } from '@angular/core/testing';

import { GlobalErrorHandler } from './global-error-handler';
import { ErrorReportingService } from '../services/error-reporting.service';

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

  describe(`when an error occurs`, () => {
    it(`should dispatch an action`, () => {
      const error = new Error('an error');
      service.handleError({ error });
      expect(errorReportingService.report).toHaveBeenCalledWith({ error });
    });
  });
});
