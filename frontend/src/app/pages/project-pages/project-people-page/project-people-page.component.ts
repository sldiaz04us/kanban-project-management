import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { ActionsSubject, Store } from '@ngrx/store';
import { ofType } from '@ngrx/effects';

import { NzModalService } from 'ng-zorro-antd/modal';

import { combineLatest, Observable, of } from 'rxjs';
import { skip, take, switchMap, startWith } from 'rxjs/operators';

import { ProjectPeopleAddModalComponent } from '@features/project/components/project-people-add-modal/project-people-add-modal.component';
import { getAssignedUsers, isCurrentProject } from '@features/project/state/project.selectors';
import { User } from '@core/interfaces/user';
import { ProjectApiActions, ProjectPageActions } from '@features/project/state/actions';


@Component({
  selector: 'project-people-page',
  templateUrl: './project-people-page.component.html',
  styleUrls: ['./project-people-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectPeoplePageComponent implements OnInit {
  isCurrentProject$: Observable<boolean>;
  assignedUsers$: Observable<User[]>;
  peopleForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<{}>,
    private modalService: NzModalService,
    private actionSubject: ActionsSubject,
    private titleService: Title
  ) {
    this.titleService.setTitle('Settings | People - Kanban Project Management');
  }

  ngOnInit(): void {
    this.isCurrentProject$ = this.store.select(isCurrentProject);

    this.peopleForm = this.fb.group({
      search: [null]
    });

    this.assignedUsers$ = combineLatest([
      this.store.select(getAssignedUsers),
      this.peopleForm.valueChanges.pipe(startWith({ search: '' }))
    ]).pipe(
      switchMap(([assignees, term]) => {
        const searchTerm = term.search as string;
        return of(assignees?.filter(a => Boolean(searchTerm) ? a.name.toLowerCase().includes(searchTerm.toLowerCase()) : true));
      })
    );
  }

  onAddPeople(): void {
    this.modalService.create({
      nzContent: ProjectPeopleAddModalComponent,
      nzClosable: false,
      nzFooter: null,
      nzKeyboard: false,
      nzMaskClosable: false
    });
  }

  onDeletePeople(user: User): void {
    this.modalService.confirm({
      nzTitle: `Remove ${user.name}`,
      nzContent: `${user.name} won't be able to work on this project anymore`,
      nzOkText: 'Delete',
      nzOkDanger: true,
      nzOnOk: () => new Promise(resolve => {
        this.actionSubject.pipe(
          skip(1),
          ofType(
            ProjectApiActions.updateProjectSuccess,
            ProjectApiActions.updateProjectFailure
          ),
          take(1)
        ).subscribe(_ => resolve())

        this.store.dispatch(ProjectPageActions.removePeople({ userId: user.id }));
      })
    })
  }

  sortFn(a: User, b: User): number {
    return a.name.localeCompare(b.name);
  }

}
