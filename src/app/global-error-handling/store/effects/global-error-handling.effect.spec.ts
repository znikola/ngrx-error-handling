import { ErrorHandler } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { Action } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { Observable } from 'rxjs';

import { hot } from 'jasmine-marbles';

import { GlobalErrorHandlingEffect } from './global-error-handling.effect';
import * as fromUserActions from '../../../user/store/actions/index';
import { GlobalError, Severity } from '../../models/global-error-handling.model';

class ErrorHandlerMock {
  handleError(): void {}
}

describe('GlobalErrorHandlingEffect', () => {
  let globalErrorHandlingEffect: GlobalErrorHandlingEffect;
  let actions$: Observable<Action>;
  let errorHandler: ErrorHandler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GlobalErrorHandlingEffect,
        {
          provide: ErrorHandler,
          useClass: ErrorHandlerMock
        },
        provideMockActions(() => actions$)
      ]
    });

    globalErrorHandlingEffect = TestBed.get(GlobalErrorHandlingEffect);
    errorHandler = TestBed.get(ErrorHandler);

    spyOn(errorHandler, 'handleError').and.callThrough();
  });

  it(`should call 'handleError' method`, () => {
    const anError = {
      severity: Severity.Critical,
      message: 'an error',
      error: 'an error'
    };
    const action = new fromUserActions.LoadUserFail({ error: anError });
    actions$ = hot('-a', { a: action });
    globalErrorHandlingEffect.handleError$.subscribe(_ => {
      expect(errorHandler.handleError).toHaveBeenCalledWith(<GlobalError>{
        error: anError,
        actionType: fromUserActions.LOAD_USER_FAIL
      });
    });
  });

  it(`should NOT call 'handleError' method`, () => {
    const action = new fromUserActions.LoadUserFail({
      actionPayload: 'random payload'
    });
    actions$ = hot('-a', { a: action });
    globalErrorHandlingEffect.handleError$.subscribe(_ => {
      expect(errorHandler.handleError).not.toHaveBeenCalled();
    });
  });
});
