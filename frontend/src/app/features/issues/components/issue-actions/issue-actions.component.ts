import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  OnInit,
  OnDestroy
} from '@angular/core';

import { ActionsSubject, Store } from '@ngrx/store';
import { ofType } from '@ngrx/effects';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { NzModalService } from 'ng-zorro-antd/modal';

import { Issue } from '@core/interfaces/issue';
import { AppState } from '@core/interfaces/app.state';
import { getCurrentProject } from '@features/project/state/project.selectors';
import { Project } from '@core/interfaces/project';
import { IssueApiActions, IssuePageActions } from '@features/issues/state/actions';

@Component({
  selector: 'issue-actions',
  templateUrl: './issue-actions.component.html',
  styleUrls: ['./issue-actions.component.scss']
})
export class IssueActionsComponent implements OnInit, OnDestroy {
  @Input() issue: Issue;
  @Output() delete = new EventEmitter();

  private subsNotifier = new Subject();
  currentProject: Project;

  constructor(
    private modalService: NzModalService,
    private store: Store<AppState>,
    private actionSubject: ActionsSubject
  ) { }

  ngOnInit(): void {
    this.store.select(getCurrentProject).pipe(takeUntil(this.subsNotifier))
      .subscribe(project => this.currentProject = project)
  }

  onDeleteIssue(templContent: TemplateRef<{}>): void {
    this.modalService.confirm({
      nzTitle: `Delete ${this.issue.type}-${this.issue.id}`,
      nzContent: templContent,
      nzOkText: 'Delete',
      nzOnOk: () => new Promise(resolve => {
        this.actionSubject.pipe(
          takeUntil(this.subsNotifier),
          ofType(IssueApiActions.deleteIssueSuccess)
        ).subscribe(_ => {
          this.delete.next();
          resolve();
        })

        const issueIdsUpdated = this.currentProject.issueIds
          .filter(issueId => issueId !== this.issue.id);

        const projectUpdated: Project = {
          ...this.currentProject,
          issueIds: issueIdsUpdated
        }

        this.store.dispatch(IssuePageActions.deleteIssue({ issueId: this.issue.id, project: projectUpdated }));
      })
    })
  }

  ngOnDestroy(): void {
    this.subsNotifier.next();
    this.subsNotifier.complete();
  }

}
