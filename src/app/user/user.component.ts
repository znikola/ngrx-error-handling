import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Store } from '@ngrx/store';

import * as fromActions from './store/actions/user.action';

import { UserState } from './store/reducers/user.reducer';

@Component({
  selector: 'app-user',
  template: `
    <label>
      Enter a user ID:
      <input type="text" [formControl]="userId">
    </label>
    <button (click)="loadUser()" type="submit">Get user</button>
  `
})
export class UserComponent {
  userId = new FormControl(1);

  constructor(private store: Store<UserState>) {}

  loadUser(): void {
    this.store.dispatch(new fromActions.LoadUser(this.userId.value));
  }
}
