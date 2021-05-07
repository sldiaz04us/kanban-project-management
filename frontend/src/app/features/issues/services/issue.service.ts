import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

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
}
