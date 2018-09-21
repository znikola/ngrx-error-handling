import { Injectable, ErrorHandler } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';

import { ErrorAction } from '../../models/global-error-handling.model';

@Injectable()
export class GlobalErrorHandlingEffect {
  @Effect({ dispatch: false })
  handleError$: Observable<any> = this.actions$.pipe(
    filter((action: ErrorAction) => Boolean(action.error)),
    switchMap((action: ErrorAction) => {
      this.errorHandler.handleError({ error: action.error, actionType: action.type, actionPayload: action.payload });

      return of({});
    })
  );

  constructor(private actions$: Actions, private errorHandler: ErrorHandler) {}
}
