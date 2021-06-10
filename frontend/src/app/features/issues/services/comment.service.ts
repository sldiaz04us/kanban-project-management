import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Comment } from '@core/interfaces/comment';
import { DateUtil } from '@core/utils/date';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private commentsUrl = 'api/comments';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getCommentsByIssueId(issueId: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.commentsUrl}?issueId=^${issueId}`);
  }

  createComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.commentsUrl, comment, this.httpOptions).pipe(
      map(() => comment)
    )
  }

  updateComment(comment: Comment): Observable<Comment> {
    const url = `${this.commentsUrl}/${comment.id}`;
    const commentUpdated: Comment = {
      ...comment,
      updatedAt: DateUtil.getNow()
    }

    return this.http.put<Comment>(url, commentUpdated, this.httpOptions).pipe(
      map(() => commentUpdated)
    );
  }

  deleteComment(commentId: string): Observable<string> {
    const url = `${this.commentsUrl}/${commentId}`;
    return this.http.delete<string>(url, this.httpOptions).pipe(
      map(() => commentId)
    );
  }
}
