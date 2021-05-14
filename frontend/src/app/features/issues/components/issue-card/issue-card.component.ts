import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map, skipWhile } from 'rxjs/operators';

import { Issue } from '@core/interfaces/issue';
import { User } from '@core/interfaces/user';
import { AppState } from '@core/interfaces/app.state';
import { getAssignedUsers } from '@features/project/state/project.selectors';

@Component({
  selector: 'app-issue-card',
  templateUrl: './issue-card.component.html',
  styleUrls: ['./issue-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IssueCardComponent implements OnInit {
  @Input() issue: Issue;
  assignees$: Observable<User[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.assignees$ = this.store.select(getAssignedUsers).pipe(
      skipWhile(users => users.length === 0),
      map(users => this.issue.userIds.map(userId => users.find(u => u.id === userId)))
    )
  }

}
