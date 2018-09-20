import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';

import { effects } from './store/effects/index';
import { GlobalErrorHandler } from './global-error-handler/global-error-handler';

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature(effects)],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }]
})
export class GlobalErrorHandlingModule {}
