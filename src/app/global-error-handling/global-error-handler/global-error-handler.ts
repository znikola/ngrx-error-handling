import { Injectable, Injector, ErrorHandler } from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromActions from '../store/actions';

@Injectable()
export class GlobalErrorHandler<T> implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: any): void {
    console.log(`error`, error);
    const store = this.injector.get<Store<T>>(Store);
    console.log(`store`, store);
    store.dispatch(new fromActions.GlobalErrorAction(error));
  }
}
