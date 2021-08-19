import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActionsSubject, Store } from '@ngrx/store';
import { ofType } from '@ngrx/effects';

import { NzModalRef } from 'ng-zorro-antd/modal';

import { Observable, Subject } from 'rxjs';
import { first, tap, takeUntil, skip } from 'rxjs/operators';

import { User } from '@core/interfaces/user';
import { UserService } from '@features/user/services/user.service';
import { Project } from '@core/interfaces/project';
import { getCurrentProject } from '@features/project/state/project.selectors';
import {
  ProjectApiActions,
  ProjectPageActions,
} from '@features/project/state/actions';

@Component({
  selector: 'project-people-add-modal',
  templateUrl: './project-people-add-modal.component.html',
  styleUrls: ['./project-people-add-modal.component.scss'],
})
export class ProjectPeopleAddModalComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  currentProject: Project;

  listOfOptions: Observable<User[]>;
  listOfSelectedValues: User[] = [];
  isSearching: boolean;
  isLoading: boolean;

  constructor(
    private userService: UserService,
    private store: Store<{}>,
    private actionSubject: ActionsSubject,
    private modalRef: NzModalRef
  ) {}

  ngOnInit(): void {
    this.store
      .select(getCurrentProject)
      .pipe(first())
      .subscribe((currentProject) => (this.currentProject = currentProject));

    this.actionSubject
      .pipe(
        skip(1),
        takeUntil(this.destroy$),
        ofType(
          ProjectApiActions.updateProjectSuccess,
          ProjectApiActions.updateProjectFailure
        )
      )
      .subscribe(() => {
        this.isLoading = false;
        this.closeModal();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  isSelected(user: User): boolean {
    return !!this.listOfSelectedValues.find((u) => u.id === user.id);
  }

  onSelected(users: any): void {
    this.listOfSelectedValues = users;
  }

  onSearch(value: string): void {
    if (!Boolean(value)) return;
    this.isSearching = true;
    this.listOfOptions = this.userService
      .searchUsersByName(value)
      .pipe(tap(() => (this.isSearching = false)));
  }

  addPeople(): void {
    this.isLoading = true;
    const assignees = [...this.currentProject.assignees];

    this.listOfSelectedValues.forEach((user) => {
      if (assignees.findIndex((u) => u.id === user.id) === -1)
        assignees.push(user);
    });

    const projectUpdated = {
      ...this.currentProject,
      assignees,
    };

    this.store.dispatch(
      ProjectPageActions.updateProject({ project: projectUpdated })
    );
  }

  closeModal(): void {
    this.modalRef.destroy();
  }
}
