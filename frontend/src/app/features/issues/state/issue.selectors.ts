import { createFeatureSelector, createSelector } from "@ngrx/store";

import { IssueStatus } from "@core/interfaces/issue";
import { IssueState } from "./issue.reducer";

const getIssueFeatureSelector = createFeatureSelector<IssueState>('issues');

export const getIssues = createSelector(
  getIssueFeatureSelector,
  state => state.issues
)

export const getIssuesByStatus = createSelector(
  getIssueFeatureSelector,
  (state: IssueState, props: { status: IssueStatus }) =>
    state.issues.filter(i => i.status === props.status)
);
