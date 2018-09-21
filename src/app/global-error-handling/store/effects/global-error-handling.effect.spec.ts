import { ErrorHandler } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { Action } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { Observable } from 'rxjs';

import { hot } from 'jasmine-marbles';

import { GlobalErrorHandlingEffect } from './global-error-handling.effect';
import * as fromActions from '../actions/index';

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

  it(`should call 'handleError' method and NOT dispatch an action`, () => {
    const anError = new Error('an error');
    actions$ = hot('-a', { a: new fromActions.GlobalErrorAction(anError) });
    globalErrorHandlingEffect.handleError$.subscribe(_ => {
      expect(errorHandler.handleError).toHaveBeenCalledWith({
        error: anError,
        actionType: fromActions.GLOBAL_ERROR_ACTION,
        actionPayload: undefined
      });
    });
  });
});
