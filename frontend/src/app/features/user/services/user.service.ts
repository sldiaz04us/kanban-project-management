import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from '@core/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUserById(userId: string): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${userId}`);
  }

  searchUsersByName(userName: string): Observable<User[]> {
    const url = `${this.usersUrl}?name=${userName}`;
    return this.http.get<User[]>(url);
  }

}
