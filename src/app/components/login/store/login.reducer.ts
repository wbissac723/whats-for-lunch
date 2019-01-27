import * as fromLogin from '../store/login.actions';
import { LoginState } from '.';
import { LoginActions, LoginAction } from '../store/login.actions';



export const initialState: LoginState = {
    loginSuccess: false,
    loggedIn: false,
    loading: false
};

export function loginReducer(state = initialState, action: LoginAction): LoginState {

    switch (action.type) {

        // case LoginActions.LOGIN: {

        // }

        case LoginActions.LOGIN_SUCCESS: {
            return {
                ...state,
                loading: false,
                loginSuccess: true,
                loggedIn: true,
            };
        }

        case LoginActions.LOGIN_FAIL: {
            return {
                ...state,
                loading: false,
                loginSuccess: false,
                loggedIn: false,
            };
        }
    }
    return state;
}
