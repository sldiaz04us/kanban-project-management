
import { ActionReducerMap } from '@ngrx/store';

import * as fromIssues from '@features/issues/state/reducers/issue.reducer';
import * as fromComments from '@features/issues/state/reducers/comment.reducer';

export interface IssueState {
  issues: fromIssues.State,
  comments: fromComments.State
}

export const reducers: ActionReducerMap<IssueState> = {
  issues: fromIssues.reducer,
  comments: fromComments.reducer
}
