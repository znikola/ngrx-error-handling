import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as fromActions from '../actions/index';

import { VehicleService } from '../../services/vehicle.service';

@Injectable()
export class VehicleEffect {
  @Effect()
  loadVehicle$: Observable<any> = this.actions$.pipe(
    ofType(fromActions.LOAD_VEHICLE),
    map((action: fromActions.LoadVehicle) => action.id),
    switchMap((id: number) => {
      return this.vehicleService.loadCart(id).pipe(
        map((vehicle: any) => new fromActions.LoadVehicleSuccess(vehicle)),
        catchError(error =>
          of(
            new fromActions.LoadVehicleFail({
              error
            })
          )
        )
      );
    })
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

  constructor(private actions$: Actions, private vehicleService: VehicleService) {}
}
