import { createSelector } from "@ngrx/store";

import { Issue, IssueStatus } from "@core/interfaces/issue";
import * as fromIssueReducer from '@features/issues/state/reducers/issue.reducer';
import * as fromSelectors from '@features/issues/state/selectors/index';


const getIssues = (state: fromIssueReducer.State) => state.issues;
const getIssueEditing = (state: fromIssueReducer.State) => state.isEditing;
const getError = (state: fromIssueReducer.State) => state.error;

export const getAllIssues = createSelector(
  fromSelectors.getIssueState,
  getIssues
)

export const getIssueById = createSelector(
  getAllIssues,
  (issues: Issue[], props: { issueId: string }) =>
    issues.find(i => i.id === props.issueId)
);

export const getIssuesCountByStatus = createSelector(
  getAllIssues,
  (issues: Issue[], props: { status: IssueStatus }) =>
    issues.filter(i => i.status === props.status).length
);

export const getIsIssueBeingEdited = createSelector(
  fromSelectors.getIssueState,
  getIssueEditing
);

export const getIssuesError = createSelector(
  fromSelectors.getIssueState,
  getError
);

// NOTE: this selector fires more than once because it changes the issues with the filter method
export const getIssuesByStatus = createSelector(
  getAllIssues,
  (issues: Issue[], props: { status: IssueStatus }) =>
    issues
      .filter(i => i.status === props.status)
      .sort((a, b) => a.listPosition - b.listPosition)
);

