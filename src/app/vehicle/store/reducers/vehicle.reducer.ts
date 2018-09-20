import * as fromActions from '../actions/index';

export interface VehicleState {
  vehicle: any;
  loading: boolean;
  loaded: boolean;
}

export const initialState: VehicleState = {
  vehicle: <any>{},
  loading: false,
  loaded: false
};

export function reducer(state = initialState, action: fromActions.VehicleActions): VehicleState {
  switch (action.type) {
    case fromActions.LOAD_VEHICLE: {
      return { ...state, loading: true };
    }

    // Notice there's no _FAIL action handled

    case fromActions.LOAD_VEHICLE_SUCCESS: {
      return {
        ...state,
        vehicle: action.payload,
        loaded: true,
        loading: false
      };
    }
  }

  return state;
}
