import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as fromActions from '../actions/index';

import { VehicleService } from '../../services/vehicle.service';

@Injectable()
export class VehicleEffect {
  @Effect()
  vehicleService$: Observable<any> = this.actions$.pipe(
    ofType(fromActions.LOAD_VEHICLE),
    map((action: fromActions.LoadVehicle) => action.id),
    switchMap((id: number) => {
      return this.vehicleService.loadCart(id).pipe(
        map((vehicle: any) => new fromActions.LoadVehicleSuccess(vehicle)),
        catchError(error => of(new fromActions.LoadVehicleFail(error)))
      );
    })
  );

  constructor(private actions$: Actions, private vehicleService: VehicleService) {}
}
