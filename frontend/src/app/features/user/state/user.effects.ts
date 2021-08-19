import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { UserService } from '../services/user.service';
import * as fromUser from './actions/user.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromUser.loadUsers),
      mergeMap(() => {
        return this.userService.findAll().pipe(
          map((users) => fromUser.loadUsersSuccess({ users })),
          catchError((error) => of(fromUser.loadUsersFailure({ error })))
        );
      })
    );
  });
}
