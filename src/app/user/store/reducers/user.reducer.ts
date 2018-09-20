import * as fromAction from '../actions/user.action';

export interface UserState {
  user: any;
  loading: boolean;
  loaded: boolean;
}

export const initialState: UserState = {
  user: <any>{},
  loading: false,
  loaded: false
};

export function reducer(state = initialState, action: fromAction.UserActions): UserState {
  switch (action.type) {
    case fromAction.LOAD_USER: {
      return {
        ...state,
        loading: true
      };
    }

    case fromAction.LOAD_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        loaded: true,
        loading: false
      };
    }

    case fromAction.LOAD_USER_FAIL: {
      return {
        ...state,
        loaded: true,
        loading: false
      };
    }
  }

  return state;
}
