import { ErrorHandler } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { Action } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { Observable } from 'rxjs';

import { hot } from 'jasmine-marbles';

import { GlobalErrorHandlingEffect } from './global-error-handling.effect';
import * as fromActions from '../actions/index';
import { GlobalError } from '../../models/global-error-handling.model';

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
    const anError = new Error('an error');
    const action = new fromActions.GlobalErrorAction({ error: anError });
    actions$ = hot('-a', { a: action });
    globalErrorHandlingEffect.handleError$.subscribe(_ => {
      expect(errorHandler.handleError).toHaveBeenCalledWith(<GlobalError>{
        error: anError,
        actionType: fromActions.GLOBAL_ERROR_ACTION
      });
    });
  });

  it(`should NOT call 'handleError' method`, () => {
    const anError = new Error('an error');
    const action = new fromActions.GlobalErrorAction({
      error: anError,
      actionPayload: 'random payload',
      skipErrorHandling: true
    });
    actions$ = hot('-a', { a: action });
    globalErrorHandlingEffect.handleError$.subscribe(_ => {
      expect(errorHandler.handleError).not.toHaveBeenCalled();
    });
  });
});
