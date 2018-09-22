import { Component, OnInit } from '@angular/core';

import { Action } from '@ngrx/store';
import { Actions } from '@ngrx/effects';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <h1>NGRX Error Handling showcase</h1>
    <div *ngIf="dispatchedActions$ | async as action">Action dispatched: {{action | json }}</div>

    <app-user></app-user>
    <br/>
    <app-vehicle></app-vehicle>
    <br/>
    <app-film></app-film>
  `
})
export class AppComponent implements OnInit {
  dispatchedActions$: Observable<any>;

  constructor(private actions$: Actions) {}

  ngOnInit(): void {
    this.dispatchedActions$ = this.actions$.pipe(map((action: Action) => action.type));
  }
}
