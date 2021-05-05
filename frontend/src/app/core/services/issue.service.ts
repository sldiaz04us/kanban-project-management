import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Issue, IssueStatus } from '@core/interfaces/issue';


@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private issuesUrl = 'api/issues';

  issues$ = this.http.get<Issue[]>(this.issuesUrl).pipe(
    tap(issues => console.log('Issues', issues))
  );

  constructor(private http: HttpClient) { }

  getIssuesByStatus(status: IssueStatus): Observable<Issue[]> {
    return this.http.get<Issue[]>(`${this.issuesUrl}?status=^${status}`);
  }
}
