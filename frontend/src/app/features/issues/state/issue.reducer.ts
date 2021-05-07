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
  })
);
