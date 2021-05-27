import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { NzModalRef } from 'ng-zorro-antd/modal';

import { AppState } from '@core/interfaces/app.state';
import { Project } from '@core/interfaces/project';
import { getAssignedUsers, getCurrentProject, getCurrentProjectId } from '@features/project/state/project.selectors';
import { User } from '@core/interfaces/user';
import { getCurrentUserId } from '@features/user/state/user.selectors';
import { Issue, IssuePriority, IssueStatus } from '@core/interfaces/issue';
import { DateUtil } from '@core/utils/date';
import { IssuePageActions } from '@features/issues/state/actions';
import { IssueUtil } from '@core/utils/issue';
import { QuillEditorUtil } from '@core/utils/quill';


@Component({
  selector: 'app-issue-create-modal',
  templateUrl: './issue-create-modal.component.html',
  styleUrls: ['./issue-create-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IssueCreateModalComponent implements OnInit, OnDestroy {
  private subsNotifier = new Subject();
  issueForm: FormGroup;

  users$: Observable<User[]>;
  currentProject: Project;
  currentProjectId: string;
  currentUserId: string;

  defaultEditorOptions = QuillEditorUtil.getDefaultModuleOptions();

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private modalRef: NzModalRef
  ) { }

  ngOnInit(): void {
    this.loadData();
    this.initForm();
  }

  submitForm() {
    if (this.issueForm.invalid) {
      return;
    }

    const now = DateUtil.getNow();
    const issueId = IssueUtil.getRandomId();
    const issue: Issue = {
      ...this.issueForm.getRawValue(),
      id: issueId,
      listPosition: 0,
      status: IssueStatus.BACKLOG,
      createdAt: now,
      updatedAt: now
    }

    const projectUpdated: Project = {
      ...this.currentProject,
      issueIds: [...this.currentProject.issueIds, issueId]
    };

    this.store.dispatch(IssuePageActions.createIssue({ issue, project: projectUpdated }));
    this.closeModal();
  }

  private loadData(): void {
    this.users$ = this.store.select(getAssignedUsers);

    this.store.select(getCurrentProjectId).pipe(takeUntil(this.subsNotifier))
      .subscribe(projectId => this.currentProjectId = projectId);

    this.store.select(getCurrentProject).pipe(takeUntil(this.subsNotifier)).
      subscribe(currentProject => this.currentProject = currentProject);

    this.store.select(getCurrentUserId).pipe(takeUntil(this.subsNotifier))
      .subscribe(userId => this.currentUserId = userId);

  }

  private initForm(): void {
    this.issueForm = this.fb.group({
      projectId: [this.currentProjectId],
      type: ['Story', Validators.required],
      priority: [IssuePriority.MEDIUM, Validators.required],
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: [''],
      reporterId: [this.currentUserId, Validators.required],
      userIds: [[]]
    });
  }

  closeModal(): void {
    this.modalRef.destroy();
  }

  ngOnDestroy(): void {
    this.subsNotifier.next();
    this.subsNotifier.complete();
  }

}
