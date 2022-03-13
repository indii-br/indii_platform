import { createReducer, on } from '@ngrx/store';
import { hydrateUser } from './user.actions';

export const initialState = null;

const _userReducer = createReducer(
    initialState,
    on(hydrateUser, (state, userData) => {
        return {
            ...state,
            userData
        };
    })
);

export function userReducer(state, action) {
    return _userReducer(state, action);
}