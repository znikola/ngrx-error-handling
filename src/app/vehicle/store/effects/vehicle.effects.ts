import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import * as fromActions from '../actions/index';
import { Severity } from '../../../global-error-handling/models/global-error-handling.model';

@Injectable()
export class VehicleEffect {
  @Effect()
  loadVehicle$: Observable<any> = this.actions$.pipe(
    ofType(fromActions.LOAD_VEHICLE),
    map((action: fromActions.LoadVehicle) => action.id),
    switchMap(_ =>
      of(
        new fromActions.LoadVehicleFail({
          error: {
            severity: Severity.Critical,
            message: 'Silent error',
            error: new Error('Silent error')
          }
        })
      )
    )
  );

  @Effect()
  addVehicle$: Observable<any> = this.actions$.pipe(
    ofType(fromActions.ADD_VEHICLE),
    switchMap(_ =>
      of(
        new fromActions.AddVehicleFail({
          error: {
            severity: Severity.Warning,
            message: 'Adding failed'
          },
          actionPayload: 'Random payload'
        })
      )
    )
  );

  constructor(private actions$: Actions) {}
}
