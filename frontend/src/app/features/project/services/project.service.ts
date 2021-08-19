import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Project } from '@core/interfaces/project';
import { ResourceService } from '@core/services/resource-service.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectService extends ResourceService<Project> {
  getResourceUrl(): string {
    return 'projects';
  }

  constructor(protected http: HttpClient) {
    super(http);
  }

  isProjectNameTaken(projectName: string): Observable<Project[]> {
    const url = `${this.API_URL}?name=${projectName}`;
    return this.http.get<Project[]>(url);
  }

  isProjectKeyTaken(projectKey: string): Observable<Project[]> {
    const url = `${this.API_URL}?key=${projectKey}`;
    return this.http.get<Project[]>(url);
  }
}
