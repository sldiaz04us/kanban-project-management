import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable, of } from 'rxjs';

import { NzModalService } from 'ng-zorro-antd/modal';

import { Issue } from '@core/interfaces/issue';
import { AppState } from '@core/interfaces/app.state';
import { IssueUtil } from '@core/utils/issue';
import { IssueDetailModalComponent } from '../issue-detail-modal/issue-detail-modal.component';
import { getIssueById } from '@features/issues/state/selectors/issue.selectors';
import { CommentPageActions } from '@features/issues/state/actions';
import { getAssignedUsers } from '@features/project/state/project.selectors';

@Component({
  selector: 'app-issue-card',
  templateUrl: './issue-card.component.html',
  styleUrls: ['./issue-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssueCardComponent implements OnInit {
  @Input() issue: Issue;
  issueTypeIcon: Observable<string>;
  priorityIcon: Observable<string>;

  constructor(
    private store: Store<AppState>,
    private modalService: NzModalService
  ) {}

  ngOnInit(): void {
    this.issueTypeIcon = of(IssueUtil.getIssueTypeIcon(this.issue.type));
    this.priorityIcon = of(IssueUtil.getIssuePriorityIcon(this.issue.priority));
  }

  openIssueDetailModal(issueId: string): void {
    this.store.dispatch(CommentPageActions.loadCommentsByIssueId({ issueId }));

    this.modalService.create({
      nzContent: IssueDetailModalComponent,
      nzWidth: 1280,
      nzClosable: false,
      nzFooter: null,
      nzComponentParams: {
        issue$: this.store.select(getIssueById, { issueId }),
        assignees$: this.store.select(getAssignedUsers),
      },
    });
  }
}
