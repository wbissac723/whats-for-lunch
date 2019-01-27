import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginState } from '.';


const getLoginFeatureState = createFeatureSelector<LoginState>('login');


export const getLoggedState = createSelector(
    getLoginFeatureState,
    (state: LoginState) => state.loggedIn
);
