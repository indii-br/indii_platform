import { createAction, props } from '@ngrx/store';

export const hydrateConfig = createAction(
    '[CONFIG] HYDRATE',
    props<{ configData: any }>()
);