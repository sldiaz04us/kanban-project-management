import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environment/environment';

@Injectable({
  providedIn: 'root',
})
export abstract class ResourceService<T> {
  protected readonly API_URL = `${
    environment.serverUrl
  }/${this.getResourceUrl()}`;

  private readonly HTTP_OPTIONS = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(protected http: HttpClient) {}

  abstract getResourceUrl(): string;

  toServerModel(entity: Partial<T>): any {
    return entity;
  }

  fromServerModel(json: any): T {
    return json;
  }

  create(resource: Partial<T>): Observable<T> {
    return this.http.post<T>(
      this.API_URL,
      this.toServerModel(resource),
      this.HTTP_OPTIONS
    );
  }

  findAll(): Observable<T[]> {
    return this.http
      .get<T[]>(this.API_URL)
      .pipe(map((projects) => projects.map((p) => this.fromServerModel(p))));
  }

  findOne(id: string): Observable<T> {
    const url = `${this.API_URL}/${id}`;
    return this.http
      .get<T>(url)
      .pipe(map((project) => this.fromServerModel(project)));
  }

  update(id: string, resource: T): Observable<T> {
    const url = `${this.API_URL}/${id}`;
    return this.http.patch<T>(
      url,
      this.toServerModel(resource),
      this.HTTP_OPTIONS
    );
  }

  remove(id: string): Observable<string> {
    const url = `${this.API_URL}/${id}`;
    return this.http.delete<string>(url, this.HTTP_OPTIONS).pipe(map(() => id));
  }
}
