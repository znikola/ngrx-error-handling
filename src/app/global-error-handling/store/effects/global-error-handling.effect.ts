import { Injectable, ErrorHandler } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';

import { ErrorAction, GlobalError } from '../../models/global-error-handling.model';

@Injectable()
export class GlobalErrorHandlingEffect {
  @Effect({ dispatch: false })
  handleError$: Observable<any> = this.actions$.pipe(
    filter((action: ErrorAction) => Boolean(action.globalError) && Boolean(action.globalError.error)),
    switchMap((action: ErrorAction) => {
      if (!action.globalError.skipErrorHandling) {
        const globalError: GlobalError = {
          ...action.globalError,
          actionType: action.type
        };

        this.errorHandler.handleError(globalError);
      }
      return of({});
    })
  );

  constructor(private actions$: Actions, private errorHandler: ErrorHandler) {}
}
