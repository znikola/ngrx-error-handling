import { MetaReducer } from '@ngrx/store';

import { errorHandler } from './global-error-handling.reducer';

export * from './global-error-handling.reducer';

export const metaReducers: MetaReducer<any>[] = [errorHandler];
