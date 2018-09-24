import { Injectable, ErrorHandler } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';

import { ErrorAction, GlobalError } from '../../models/global-error-handling.model';
import { GlobalErrorUtils } from '../../utils/global-error-utils';

@Injectable()
export class GlobalErrorHandlingEffect {
  @Effect({ dispatch: false })
  handleError$: Observable<any> = this.actions$.pipe(
    filter((action: ErrorAction) => GlobalErrorUtils.isGlobalError(action.globalError)),
    switchMap((action: ErrorAction) => {
      const globalError: GlobalError = {
        ...action.globalError,
        actionType: action.type
      };

      this.errorHandler.handleError(globalError);

      return of({});
    })
  );

  constructor(private actions$: Actions, private errorHandler: ErrorHandler) {}
}
