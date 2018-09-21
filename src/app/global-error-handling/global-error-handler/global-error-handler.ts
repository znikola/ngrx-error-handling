import { Injectable, Injector, ErrorHandler } from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromActions from '../store/actions';
import * as fromRoot from '../../reducers/index';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: any): void {
    const store = this.injector.get<Store<fromRoot.State>>(Store);
    store.dispatch(new fromActions.GlobalErrorAction(error));
  }
}
