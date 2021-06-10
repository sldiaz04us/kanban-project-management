import { InMemoryDbService } from "angular-in-memory-web-api";

import { ProjectData } from "./project-data";
import { UserData } from "./user-data";
import { IssueData } from "./issue-data";
import { CommentData } from "./comment-data";

export class AppData implements InMemoryDbService {
  createDb() {
    const projects = ProjectData.projects;
    const users = UserData.users;
    const issues = IssueData.issues;
    const comments = CommentData.comments

    return { projects, users, issues, comments };
  }
}
