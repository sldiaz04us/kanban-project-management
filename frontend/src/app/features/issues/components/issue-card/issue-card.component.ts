import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { map, skipWhile } from 'rxjs/operators';

import { NzModalService } from 'ng-zorro-antd/modal';

import { Issue } from '@core/interfaces/issue';
import { User } from '@core/interfaces/user';
import { AppState } from '@core/interfaces/app.state';
import { getAssignedUsers } from '@features/project/state/project.selectors';
import { IssuePriorityIcon } from '@core/interfaces/issue-priority-icon';
import { IssueUtil } from '@core/utils/issue';
import { IssueDetailModalComponent } from '../issue-detail-modal/issue-detail-modal.component';
import { getIssueById } from '@features/issues/state/selectors/issue.selectors';
import { CommentPageActions } from '@features/issues/state/actions';

@Component({
  selector: 'app-issue-card',
  templateUrl: './issue-card.component.html',
  styleUrls: ['./issue-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IssueCardComponent implements OnInit {
  @Input() issue: Issue;
  assignees$: Observable<User[]>;
  issueTypeIcon: Observable<string>;
  priorityIcon: Observable<IssuePriorityIcon>;

  constructor(
    private store: Store<AppState>,
    private modalService: NzModalService
  ) { }

  ngOnInit(): void {
    this.assignees$ = this.store.select(getAssignedUsers).pipe(
      skipWhile(users => users.length === 0),
      map(users => this.issue.userIds.map(userId => users.find(u => u.id === userId)))
    )

    this.issueTypeIcon = of(IssueUtil.getIssueTypeIcon(this.issue.type));
    this.priorityIcon = of(IssueUtil.getIssuePriorityIcon(this.issue.priority));
  }

  openIssueDetailModal(issueId: string): void {
    this.store.dispatch(CommentPageActions.loadCommentsByIssueId({ issueId }));

    this.modalService.create({
      nzContent: IssueDetailModalComponent,
      nzWidth: 1040,
      nzClosable: false,
      nzFooter: null,
      nzComponentParams: {
        issue$: this.store.select(getIssueById, { issueId }),
        assignees$: this.store.select(getAssignedUsers)
      }
    });
  }

}
