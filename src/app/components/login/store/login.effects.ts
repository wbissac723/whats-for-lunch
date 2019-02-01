import { Injectable } from '@angular/core';

import { mergeMap, map, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { LoginState } from '.';
import { LoginService } from '../services/login.service';
import * as fromLogin from './login.actions';
import { delay } from 'rxjs/internal/operators/delay';

@Injectable()
export class LoginEffects {
    constructor(
        private actions$: Actions,
        private store: Store<LoginState>,
        private loginService: LoginService
    ) { }

    @Effect()
    loadUser$ = this.actions$.pipe(
        ofType(fromLogin.LoginActions.LOGIN),
        // TODO show spinner while fetching data
        delay(1500),
        mergeMap((action: fromLogin.Login) => this.loginService.login(action.payload)
        .pipe(
            map(() => (new fromLogin.LoginSuccess)),
            catchError(() => of(new fromLogin.LoginSuccess))

            // TODO connect to real service and add error handling on service failure
        ))
    );
}
