export * from './vehicle.reducer';

import { ActionReducerMap } from '@ngrx/store';

import { VehicleState, reducer } from './vehicle.reducer';

export interface VehiclesState {
  vehicle: VehicleState;
}

export function getReducers(): ActionReducerMap<VehiclesState> {
  return {
    vehicle: reducer
  };
}
