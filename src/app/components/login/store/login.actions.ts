import { Action } from '@ngrx/store';


export enum LoginActions {
  LOGIN = '[Login] Login user',
  LOGIN_SUCCESS = '[Login] Login Success',
  LOGIN_FAIL = '[Login] Login Fail',

}

export class Login implements Action {
    readonly type = LoginActions.LOGIN;

    constructor(readonly payload: { username: string, password: string}) {}
}
export class LoginUserSuccess implements Action {
    readonly type = LoginActions.LOGIN_SUCCESS;
}

export class LoginUserFail implements Action {
    readonly type = LoginActions.LOGIN_FAIL;
}


export type LoginAction = Login | LoginUserSuccess | LoginUserFail;
