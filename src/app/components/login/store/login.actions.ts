import { Action } from '@ngrx/store';

export const LOGIN_SUCCESS = '[Login Page] Login Success';
export const LOGIN_FAIL = '[Login Page] Login Fail';


export class LoginUserSuccess implements Action {
    readonly type = LOGIN_SUCCESS;
}

export class LoginUserFail implements Action {
    readonly type = LOGIN_FAIL;
}

export type LoginAction = LoginUserSuccess | LoginUserFail;
