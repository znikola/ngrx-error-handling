import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';

import { effects } from './store/effects/index';
import { getReducers } from './store/reducers/index';

import { UserComponent } from './user.component';

import { UserService } from './services/user.service';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature('users', getReducers()),
    EffectsModule.forFeature(effects)
  ],
  providers: [UserService],
  declarations: [UserComponent],
  exports: [UserComponent]
})
export class UserModule {}
