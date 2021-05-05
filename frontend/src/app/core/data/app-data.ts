import { InMemoryDbService } from "angular-in-memory-web-api";

import { ProjectData } from "./project-data";
import { UserData } from "./user-data";
import { IssueData } from "./issue-data";

export class AppData implements InMemoryDbService {
  createDb() {
    const projects = ProjectData.projects;
    const users = UserData.users;
    const issues = IssueData.issues;

    return { projects, users, issues };
  }
}
