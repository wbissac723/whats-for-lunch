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
export class LoginSuccess implements Action {
    readonly type = LoginActions.LOGIN_SUCCESS;
}

export class LoginFail implements Action {
    readonly type = LoginActions.LOGIN_FAIL;
}


export type LoginAction = Login | LoginSuccess | LoginFail;
