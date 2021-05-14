import { IssueState } from "@features/issues/state/issue.reducer";
import { ProjectState } from "@features/project/state/project.reducer";

export interface AppState {
  project: ProjectState,
  issue: IssueState
}
