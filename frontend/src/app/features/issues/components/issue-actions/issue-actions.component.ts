import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';

import { ActionsSubject, Store } from '@ngrx/store';
import { ofType } from '@ngrx/effects';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { NzModalService } from 'ng-zorro-antd/modal';

import { Issue } from '@core/interfaces/issue';
import { AppState } from '@core/interfaces/app.state';
import {
  IssueApiActions,
  IssuePageActions,
} from '@features/issues/state/actions';

@Component({
  selector: 'issue-actions',
  templateUrl: './issue-actions.component.html',
  styleUrls: ['./issue-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssueActionsComponent implements OnDestroy {
  @Input() issue: Issue;
  @Output() delete = new EventEmitter();

  private destroy$ = new Subject();

  constructor(
    private modalService: NzModalService,
    private store: Store<AppState>,
    private actionSubject: ActionsSubject
  ) {}

  onDeleteIssue(templContent: TemplateRef<{}>): void {
    this.modalService.confirm({
      nzTitle: `Delete ${this.issue.projectKey}-${this.issue.key}`,
      nzContent: templContent,
      nzOkText: 'Delete',
      nzOkDanger: true,
      nzOnOk: () =>
        new Promise((resolve) => {
          this.actionSubject
            .pipe(
              takeUntil(this.destroy$),
              ofType(
                IssueApiActions.deleteIssueSuccess,
                IssueApiActions.deleteIssueFailure
              )
            )
            .subscribe((_) => {
              this.delete.next();
              resolve();
            });

          this.store.dispatch(
            IssuePageActions.deleteIssue({ issueId: this.issue.id })
          );
        }),
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
