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

  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.projectsUrl, project, this.httpOptions).pipe(
      map(() => project)
    );
  }

  updateProject(project: Project): Observable<Project> {
    const url = `${this.projectsUrl}/${project.id}`;
    return this.http.put<Project>(url, project, this.httpOptions).pipe(
      map(() => project)
    );
  }

  deleteProject(projectId: string): Observable<string> {
    const url = `${this.projectsUrl}/${projectId}`;
    return this.http.delete<string>(url, this.httpOptions).pipe(
      map(() => projectId)
    );
  }

  isProjectNameTaken(projectName: string): Observable<Project[]> {
    const url = `${this.projectsUrl}?name=^${projectName}$`;
    return this.http.get<Project[]>(url);
  }

  isProjectKeyTaken(projectKey: string): Observable<Project[]> {
    const url = `${this.projectsUrl}?key=^${projectKey}$`;
    return this.http.get<Project[]>(url);
  }

}
