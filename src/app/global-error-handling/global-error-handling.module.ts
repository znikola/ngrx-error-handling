import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';

import { metaReducers } from './reducers/index';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('errors', {}, { metaReducers })],
  declarations: []
})
export class GlobalErrorHandlingModule {}
