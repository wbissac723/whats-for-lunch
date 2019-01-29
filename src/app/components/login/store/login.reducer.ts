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

        case LoginActions.LOGIN: {
            console.log('Logging into account.');
            return {
                ...state,
                loading: true
            };
        }

        case LoginActions.LOGIN_SUCCESS: {
            console.log('Login was successful!');
            return {
                ...state,
                loading: false,
                loginSuccess: true,
                loggedIn: true,
            };
        }

        case LoginActions.LOGIN_FAIL: {
            console.log('login failed!');
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
