import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Issue, IssueStatus } from '@core/interfaces/issue';


@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private issuesUrl = 'api/issues';

  constructor(private http: HttpClient) { }

  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.issuesUrl);
  }

  getIssuesByStatus(status: IssueStatus): Observable<Issue[]> {
    return this.http.get<Issue[]>(`${this.issuesUrl}?status=^${status}`);
  }

  getIssuesByProjectId(projectId: string): Observable<Issue[]> {
    return this.http.get<Issue[]>(`${this.issuesUrl}?projectId=^${projectId}`);
  }

  updateIssue(issue: Issue): Observable<Issue> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.issuesUrl}/${issue.id}`;
    return this.http.put<Issue>(url, issue, { headers }).pipe(
      map(() => issue)
    );
  }

}
