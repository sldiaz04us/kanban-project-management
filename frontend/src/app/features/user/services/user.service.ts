import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from '@core/interfaces/user';
import { ResourceService } from '@core/services/resource-service.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends ResourceService<User> {
  getResourceUrl(): string {
    return 'users';
  }

  constructor(protected http: HttpClient) {
    super(http);
  }

  searchUsersByName(userName: string): Observable<User[]> {
    const url = `${this.API_URL}?name=${userName}`;
    return this.http.get<User[]>(url);
  }
}
