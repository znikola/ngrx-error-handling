import { Action } from '@ngrx/store';
import { ErrorAction } from '../../../global-error-handling/actions/global-error-handling.action';

export const LOAD_VEHICLE = '[VEHICLE] Load Vehicle';
export const LOAD_VEHICLE_SUCCESS = '[VEHICLE] Load Vehicle Success';
export const LOAD_VEHICLE_FAIL = '[VEHICLE] Load Vehicle Fail';

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
  constructor(public error: Error, public payload?: any) {}
}

export type VehicleActions = LoadVehicle | LoadVehicleSuccess | LoadVehicleFail;
