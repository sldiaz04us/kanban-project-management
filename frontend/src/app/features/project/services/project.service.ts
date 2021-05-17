import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Project } from '@core/interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectsUrl = 'api/projects';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl);
  }

  updateProject(project: Project): Observable<Project> {
    const url = `${this.projectsUrl}/${project.id}`;
    return this.http.put<Project>(url, project, this.httpOptions).pipe(
      map(() => project)
    );
  }
}
