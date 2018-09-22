import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Store } from '@ngrx/store';

import * as fromActions from '../store/actions';

import { VehicleState } from '../store';

@Component({
  selector: `app-vehicle`,
  template: `
    <label>
      Enter a vehicle ID (will cause a silent failure):
      <input type="text" [formControl]="vehicleId">
    </label>
    <button (click)="loadVehicle()" type="submit">Get Vehicle</button>

    <br/>

    <label>
      Enter a new vehicle (will cause failure that's going not going to be logged):
      <input type="text">
    </label>
    <button (click)="newVehicle()" type="button">Add New Vehicle</button>
  `
})
export class VehicleComponent {
  vehicleId = new FormControl(1);

  constructor(private store: Store<VehicleState>) {}

  loadVehicle(): void {
    this.store.dispatch(new fromActions.LoadVehicle(this.vehicleId.value));
  }

  newVehicle() {
    this.store.dispatch(new fromActions.AddVehicle({}));
  }
}
