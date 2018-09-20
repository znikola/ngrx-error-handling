import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Store } from '@ngrx/store';

import * as fromActions from './store/actions/index';

import { VehicleState } from './store';
import { Observable } from 'rxjs';

@Component({
  selector: `app-vehicle`,
  template: `
    <label>
      Enter a vehicle ID:
      <input type="text" [formControl]="vehicleId">
    </label>
    <button (click)="loadVehicle()" type="submit">Get Vehicle</button>
  `
})
export class VehicleComponent implements OnInit {
  vehicleId = new FormControl(1);
  // vehicle$: Observable<any>

  constructor(private store: Store<VehicleState>) {}

  ngOnInit() {
    // this.vehicle$ = this.store.select
  }

  loadVehicle(): void {
    this.store.dispatch(new fromActions.LoadVehicle(this.vehicleId.value));
  }
}