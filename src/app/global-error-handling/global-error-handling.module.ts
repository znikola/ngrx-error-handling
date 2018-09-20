import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';

import { effects } from './effects/index';

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature(effects)],
  declarations: []
})
export class GlobalErrorHandlingModule {}
