import { LoginAction } from './login.actions';
import * as fromLogin from '../store/login.actions';

export interface LoginState {
    loggedIn: boolean;
    loggedOut: boolean;
    loading: boolean;
}

export const initialState: LoginState = {
    loggedIn: false,
    loggedOut: true,
    loading: false
};

export function reducer(state = initialState, action: LoginAction): LoginState {

    switch (action.type) {
        case fromLogin.LOGIN : {
            return {
                ...state,
                loading: true
            };
        }

        case fromLogin.LOGIN_SUCCESS : {
            return {
                ...state,
                loading: false,
                loggedIn: true,
                loggedOut: false
            };
        }

        case fromLogin.LOGIN_FAIL: {
            return {
                ...state,
                loading: false,
                loggedIn: false,
                loggedOut: true
            };
        }
    }
    return state;
}




