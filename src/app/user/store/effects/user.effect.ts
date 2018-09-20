import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { Actions, Effect, ofType } from '@ngrx/effects';

import * as fromActions from '../actions/user.action';

import { UserService } from '../../services/user.service';

@Injectable()
export class UserEffect {
  @Effect()
  loadUser$: Observable<any> = this.actions$.pipe(
    ofType(fromActions.LOAD_USER),
    map((action: fromActions.LoadUser) => action.id),
    switchMap((id: number) => {
      return this.userService.loadUser(id).pipe(
        map((user: any) => new fromActions.LoadUserSuccess(user)),
        catchError(error => of(new fromActions.LoadUserFail(error)))
      );
    })
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
