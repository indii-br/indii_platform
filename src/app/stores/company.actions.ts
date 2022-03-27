import { createAction, props } from '@ngrx/store';

export const hydrateCompany = createAction(
    '[COMPANY] HYDRATE',
    props<{ companyData: any }>()
);