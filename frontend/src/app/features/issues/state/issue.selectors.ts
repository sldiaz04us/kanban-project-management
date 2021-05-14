import { createFeatureSelector, createSelector } from "@ngrx/store";

import { Issue, IssueStatus } from "@core/interfaces/issue";
import { IssueState } from "./issue.reducer";


const getIssueFeatureSelector = createFeatureSelector<IssueState>('issue');

export const getIssues = createSelector(
  getIssueFeatureSelector,
  state => state.issues
)

// NOTE: this selector fires more than once because it changes the issues with the filter method
export const getIssuesByStatus = createSelector(
  getIssues,
  (issues: Issue[], props: { status: IssueStatus }) =>
    issues
      .filter(i => i.status === props.status)
      .sort((a, b) => a.listPosition - b.listPosition)
);

