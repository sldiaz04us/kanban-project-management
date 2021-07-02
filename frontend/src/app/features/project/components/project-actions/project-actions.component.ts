import { Component, Input, OnDestroy } from '@angular/core';

import { ActionsSubject, Store } from '@ngrx/store';
import { ofType } from '@ngrx/effects';

import { NzModalService } from 'ng-zorro-antd/modal';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Project } from '@core/interfaces/project';
import { ProjectApiActions, ProjectPageActions } from '@features/project/state/actions';

@Component({
  selector: 'project-actions',
  templateUrl: './project-actions.component.html',
  styleUrls: ['./project-actions.component.scss']
})
export class ProjectActionsComponent implements OnDestroy {
  @Input() project: Project;

  private destroy$ = new Subject();

  constructor(
    private modalService: NzModalService,
    private store: Store<{}>,
    private actionSubject: ActionsSubject
  ) { }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onDeleteProject(): void {
    this.modalService.confirm({
      nzTitle: `Delete ${this.project.name}`,
      nzContent: "You're about to permanently delete this project, its issues, and all of its data.",
      nzOkText: 'Delete',
      nzOkDanger: true,
      nzOnOk: () => new Promise(resolve => {
        this.actionSubject.pipe(
          takeUntil(this.destroy$),
          ofType(
            ProjectApiActions.deleteProjectSuccess,
            ProjectApiActions.deleteProjectFailure
          )
        ).subscribe(_ => {
          resolve();
        })

        this.store.dispatch(ProjectPageActions.deleteProject({ projectId: this.project.id }));
      })
    })
  }

}
