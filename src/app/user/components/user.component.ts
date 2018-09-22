import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import * as fromActions from '../store/actions/user.action';
import { UserState } from '../store/reducers/user.reducer';
import { getUsersState, UsersState } from '../store/reducers';

@Component({
  selector: 'app-user',
  template: `
    <label>
      Enter a user ID:
      <input type="text" [formControl]="userId">
    </label>
    <button (click)="loadUser()" type="submit">Get user</button>
    <div *ngIf="user$ | async as user">{{user | json}}</div>
  `
})
export class UserComponent implements OnInit {
  userId = new FormControl(1);
  user$: Observable<any>;

  constructor(private store: Store<UserState>) {}

  ngOnInit(): void {
    this.user$ = this.store.pipe(
      select(getUsersState),
      filter((usersState: UsersState) => Object.keys(usersState.user.user).length !== 0),
      map((usersState: UsersState) => `${usersState.user.user.name}`)
    );
  }

  loadUser(): void {
    this.store.dispatch(new fromActions.LoadUser(this.userId.value));
  }
}
