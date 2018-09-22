import { Action } from '@ngrx/store';

import { ErrorAction, GlobalError } from '../../../global-error-handling/models/global-error-handling.model';

export const LOAD_VEHICLE = '[VEHICLE] Load Vehicle';
export const LOAD_VEHICLE_SUCCESS = '[VEHICLE] Load Vehicle Success';
export const LOAD_VEHICLE_FAIL = '[VEHICLE] Load Vehicle Fail';

export const ADD_VEHICLE = '[VEHICLE] Add Vehicle';
export const ADD_VEHICLE_FAIL = '[VEHICLE] Add Vehicle Fail';

export class LoadVehicle implements Action {
  readonly type = LOAD_VEHICLE;
  constructor(public id: number) {}
}

export class LoadVehicleSuccess implements Action {
  readonly type = LOAD_VEHICLE_SUCCESS;
  constructor(public payload: any) {}
}

export class LoadVehicleFail implements ErrorAction {
  readonly type = LOAD_VEHICLE_FAIL;
  constructor(public globalError: GlobalError) {}
}

export class AddVehicle implements Action {
  readonly type = ADD_VEHICLE;
  constructor(public vehicle: any) {}
}

export class AddVehicleFail implements ErrorAction {
  readonly type = ADD_VEHICLE_FAIL;
  constructor(public globalError: GlobalError) {}
}

export type VehicleActions = LoadVehicle | LoadVehicleSuccess | LoadVehicleFail | AddVehicle | AddVehicleFail;
