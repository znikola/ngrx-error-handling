import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { effects } from './store/effects/index';
import { getReducers } from './store/reducers/index';

import { VehicleComponent } from './components/vehicle.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature('vehicles', getReducers()),
    EffectsModule.forFeature(effects)
  ],
  declarations: [VehicleComponent],
  exports: [VehicleComponent]
})
export class VehicleModule {}
