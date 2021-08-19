import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Issue } from '@core/interfaces/issue';
import { ResourceService } from '@core/services/resource-service.service';

@Injectable({
  providedIn: 'root',
})
export class IssueService extends ResourceService<Issue> {
  getResourceUrl(): string {
    return 'issues';
  }

  constructor(protected http: HttpClient) {
    super(http);
  }

  getIssuesByProjectId(projectId: string): Observable<Issue[]> {
    return this.http.get<Issue[]>(`${this.API_URL}?projectId=${projectId}`);
  }
}
