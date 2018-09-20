import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { ErrorAction } from '../actions/global-error-handling.action';

@Injectable()
export class GlobalErrorHandlingEffect {
  @Effect({ dispatch: false })
  handleError$: Observable<any> = this.actions$.pipe(
    filter((action: ErrorAction) => Boolean(action.error)),
    switchMap((action: ErrorAction) => {
      console.log(`Error caught:`, action.error);
      // TODO: send errors to the server

      return of({});
    })
  );

  constructor(private actions$: Actions) {}
}
