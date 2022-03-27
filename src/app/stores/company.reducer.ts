import { createReducer, on } from '@ngrx/store';
import { hydrateCompany } from './company.actions';

export const initialState = null;

const _companyReducer = createReducer(
    initialState,
    on(hydrateCompany, (state, companyData) => {
        return {
            ...state,
            companyData
        };
    })
);

export function companyReducer(state, action) {
    return _companyReducer(state, action);
}