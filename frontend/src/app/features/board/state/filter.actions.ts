import { createAction, props } from '@ngrx/store';


export const setSearchTermFilter = createAction(
  '[Filter] Set SearchTerm',
  props<{ searchTerm: string }>()
);

export const toggleUser = createAction(
  '[Filter] Toggle User',
  props<{ userId: string }>()
)

export const toggleOnlyMyIssues = createAction('[Filter] Toogle Only My Issues');

export const toggleRecentlyUpdated = createAction('[Filter] Toogle Recently Updated');

export const clearAllFilters = createAction('[Filter] Clear All');




