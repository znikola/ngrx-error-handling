import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { EffectsModule } from '@ngrx/effects';

import { effects } from './store/effects/index';
import { GlobalErrorHandler } from './global-error-handler/global-error-handler';
import { ErrorReportingService } from './services/error-reporting.service';

@NgModule({
  imports: [CommonModule, HttpClientModule, EffectsModule.forFeature(effects)],
  providers: [ErrorReportingService, { provide: ErrorHandler, useClass: GlobalErrorHandler }]
})
export class GlobalErrorHandlingModule {}
