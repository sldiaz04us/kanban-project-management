import { createReducer, on } from "@ngrx/store";

import { Issue } from "@core/interfaces/issue";
import { IssueApiActions, IssuePageActions } from '@features/issues/state/actions';

export interface State {
  issues: Issue[];
  isEditing: boolean;
  error: string;
}

const initialState: State = {
  issues: [],
  isEditing: false,
  error: '',
}

export const reducer = createReducer<State>(
  initialState,
  on(IssueApiActions.loadIssuesSuccess, (state, action): State => {
    return {
      ...state,
      issues: action.issues,
      error: ''
    }
  }),
  on(IssueApiActions.loadIssuesFailure, (state, action): State => {
    return {
      ...state,
      error: action.error
    }
  }),
  on(IssueApiActions.createIssueSuccess, (state, action): State => {
    const updatedIssues = [...state.issues, action.issue];
    return {
      ...state,
      issues: updatedIssues
    }
  }),
  on(IssueApiActions.createIssueFailure, (state, action): State => {
    return {
      ...state,
      error: action.error
    }
  }),
  on(IssueApiActions.updateIssueSuccess, (state, action): State => {
    const updatedIssues = state.issues.map(
      issue => action.issue.id === issue.id ? action.issue : issue
    );
    return {
      ...state,
      issues: updatedIssues
    }
  }),
  on(IssueApiActions.updateIssueFailure, (state, action): State => {
    return {
      ...state,
      error: action.error
    }
  }),
  on(IssueApiActions.deleteIssueSuccess, (state, action): State => {
    const issuesUpdated = state.issues.filter(i => i.id !== action.issueId);
    return {
      ...state,
      issues: issuesUpdated
    }
  }),
  on(IssueApiActions.deleteIssueFailure, (state, action): State => {
    return {
      ...state,
      error: action.error
    }
  }),
  on(IssuePageActions.setIssueEditing, (state, action): State => {
    return {
      ...state,
      isEditing: action.isEditing
    }
  })
);
