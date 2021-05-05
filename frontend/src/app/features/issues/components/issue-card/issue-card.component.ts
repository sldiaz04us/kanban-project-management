import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { from, Observable } from 'rxjs';
import { mergeMap, toArray } from 'rxjs/operators';

import { Issue } from '@core/interfaces/issue';
import { User } from '@core/interfaces/user';
import { UserService } from '@core/services/user.service';

@Component({
  selector: 'app-issue-card',
  templateUrl: './issue-card.component.html',
  styleUrls: ['./issue-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IssueCardComponent implements OnInit {
  @Input() issue: Issue;
  assignees$: Observable<User[]>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.assignees$ = from(this.issue.userIds).pipe(
      mergeMap(userId => this.userService.getUserById(userId)),
      toArray()
    );
  }

}
