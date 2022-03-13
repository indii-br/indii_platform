import { createAction, props } from '@ngrx/store';

export const hydrateProfile = createAction(
    '[PROFILE] HYDRATE',
    props<{ profileData: any }>()
);