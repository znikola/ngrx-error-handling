import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as fromActions from '../actions/index';

@Injectable()
export class VehicleEffect {
  @Effect()
  loadVehicle$: Observable<any> = this.actions$.pipe(
    ofType(fromActions.LOAD_VEHICLE),
    map((action: fromActions.LoadVehicle) => action.id),
    switchMap(_ =>
      of(
        new fromActions.LoadVehicleFail({
          error: new Error('Silent error')
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
          error: new Error('Adding failed'),
          actionPayload: 'Random payload',
          skipErrorHandling: true
        })
      )
    )
  );

  constructor(private actions$: Actions) {}
}
