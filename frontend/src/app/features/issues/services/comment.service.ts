import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Comment } from '@core/interfaces/comment';
import { ResourceService } from '@core/services/resource-service.service';

@Injectable({
  providedIn: 'root',
})
export class CommentService extends ResourceService<Comment> {
  getResourceUrl(): string {
    return 'comments';
  }
  constructor(protected http: HttpClient) {
    super(http);
  }

  getCommentsByIssueId(issueId: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.API_URL}?issueId=${issueId}`);
  }
}
