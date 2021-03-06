import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

import { reducers, metaReducers } from './reducers/index';
import { environment } from '../environments/environment';
import { UserModule } from './user/user.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { FilmModule } from './film/film.module';
import { GlobalErrorHandlingModule } from './global-error-handling/global-error-handling.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    environment.production ? [] : StoreDevtoolsModule.instrument(),

    UserModule,
    VehicleModule,
    FilmModule,

    GlobalErrorHandlingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
