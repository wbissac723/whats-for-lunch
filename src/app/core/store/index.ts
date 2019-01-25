import * as fromLogin from '../../components/login/store/login.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    login: fromLogin.LoginState;
}

export const reducers: ActionReducerMap<AppState> = {
    login: fromLogin.reducer
};

