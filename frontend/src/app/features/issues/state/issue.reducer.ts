import { createReducer, on } from "@ngrx/store";

import { Issue } from "@core/interfaces/issue";
import { IssueApiActions } from './actions';

export interface IssueState {
  issues: Issue[];
  error: string;
}

const initialState: IssueState = {
  issues: [],
  error: ''
}

export const issueReducer = createReducer<IssueState>(
  initialState,
  on(IssueApiActions.loadIssuesSuccess, (state, action): IssueState => {
    return {
      ...state,
      issues: action.issues,
      error: ''
    }
  }),
  on(IssueApiActions.loadIssuesFailure, (state, action): IssueState => {
    return {
      ...state,
      error: action.error
    }
  }),
  on(IssueApiActions.createIssueSuccess, (state, action): IssueState => {
    const updatedIssues = [...state.issues, action.issue];
    return {
      ...state,
      issues: updatedIssues
    }
  }),
  on(IssueApiActions.createIssueFailure, (state, action): IssueState => {
    return {
      ...state,
      error: action.error
    }
  }),
  on(IssueApiActions.updateIssueSuccess, (state, action): IssueState => {
    const updatedIssues = state.issues.map(
      issue => action.issue.id === issue.id ? action.issue : issue
    );
    return {
      ...state,
      issues: updatedIssues
    }
  }),
  on(IssueApiActions.updateIssueFailure, (state, action): IssueState => {
    return {
      ...state,
      error: action.error
    }
  })
);
