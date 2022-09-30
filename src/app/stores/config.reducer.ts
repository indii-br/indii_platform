import { createReducer, on } from '@ngrx/store';
import { hydrateConfig } from './config.actions';

export const initialState = null;

const _configReducer = createReducer(
    initialState,
    on(hydrateConfig, (state, configData) => {
        return {
            ...state,
            configData
        };
    })
);

export function configReducer(state, action) {
    return _configReducer(state, action);
}