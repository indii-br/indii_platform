import { createReducer, on } from '@ngrx/store';
import { hydrateProfile } from './profile.actions';

export const initialState = null;

const _profileReducer = createReducer(
    initialState,
    on(hydrateProfile, (state, profileData) => {
        return {
            ...state,
            profileData
        };
    })
);

export function profileReducer(state, action) {
    return _profileReducer(state, action);
}