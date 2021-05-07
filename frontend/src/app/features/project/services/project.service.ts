import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Project } from '@core/interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectsUrl = 'api/projects';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl);
  }
}
