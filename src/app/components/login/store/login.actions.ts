import { Action } from '@ngrx/store';

export const LOGIN_USER = 'Login User';
export const LOGIN_USER_SUCCESS = 'Login User Success';
export const LOGIN_USER_FAIL = 'Login User Fail';

export class LoginUser implements Action {
    readonly type = LOGIN_USER;
}

export class LoginUserSuccess implements Action {
    readonly type = LOGIN_USER_SUCCESS;
}

export class LoginUserFail implements Action {
    readonly type = LOGIN_USER_FAIL;
}

export type LoginAction = LoginUser | LoginUserSuccess | LoginUserFail;
