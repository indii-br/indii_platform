import { createAction, props } from '@ngrx/store';

export const hydrateUser = createAction(
    '[USER] HYDRATE',
    props<{ userData: any }>()
);