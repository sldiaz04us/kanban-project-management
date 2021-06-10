import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IssueState } from '@features/issues/state/reducers';


export const issueFeatureKey = 'issue';
export const getIssuesFeatureSelector = createFeatureSelector<IssueState>(issueFeatureKey);

export const getIssueState = createSelector(
  getIssuesFeatureSelector,
  state => state.issues
);

export const getCommentState = createSelector(
  getIssuesFeatureSelector,
  state => state.comments
);
