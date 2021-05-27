import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Issue, IssueStatus } from '@core/interfaces/issue';
import { DateUtil } from '@core/utils/date';


@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private issuesUrl = 'api/issues';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

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

  createIssue(issue: Issue): Observable<Issue> {
    return this.http.post<Issue>(this.issuesUrl, issue, this.httpOptions).pipe(
      map(() => issue)
    );
  }

  updateIssue(issue: Issue): Observable<Issue> {
    const url = `${this.issuesUrl}/${issue.id}`;
    const issueUpdated: Issue = {
      ...issue,
      updatedAt: DateUtil.getNow()
    }
    return this.http.put<Issue>(url, issueUpdated, this.httpOptions).pipe(
      map(() => issueUpdated)
    );
  }

  deleteIssue(issueId: string): Observable<string> {
    const url = `${this.issuesUrl}/${issueId}`;
    return this.http.delete<string>(url, this.httpOptions).pipe(
      map(() => issueId)
    );
  }

}
