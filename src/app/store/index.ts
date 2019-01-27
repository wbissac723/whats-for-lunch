import { LoginState } from '../components/login/store';
import { loginReducer } from '../components/login/store/login.reducer';
import { ActionReducerMap } from '@ngrx/store';


export interface AppState {
    login: LoginState;
  }

export const reducers: ActionReducerMap<AppState> = {
    login: loginReducer
  };


