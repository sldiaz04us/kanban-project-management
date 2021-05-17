import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { NzModalService } from 'ng-zorro-antd/modal';

import { NavigationService } from '@features/navigation/services/navigation.service';
import { Project } from '@core/interfaces/project';
import { AppState } from '@core/interfaces/app.state';
import { setCurrentProject } from '@features/project/state/actions/project-page.actions';
import { IssueCreateModalComponent } from '@features/issues/components/issue-create-modal/issue-create-modal.component';
import { User } from '@core/interfaces/user';

@Component({
  selector: 'app-navigation-toolbar',
  templateUrl: './navigation-toolbar.component.html',
  styleUrls: ['./navigation-toolbar.component.scss']
})
export class NavigationToolbarComponent implements OnInit, OnDestroy {
  @Input() projects$: Observable<Project[]>;
  @Input() currentUser: User;

  private subsNotifier = new Subject();

  isSidebarCollapsed = false;

  constructor(
    private navigationService: NavigationService,
    private store: Store<AppState>,
    private modalService: NzModalService
  ) { }

  ngOnInit(): void {
    this.navigationService.sidebarCollapseStatusChanged$.pipe(takeUntil(this.subsNotifier)).subscribe(collapseStatus => this.isSidebarCollapsed = collapseStatus);
  }

  onCollapseSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    this.navigationService.collapseSidebar(this.isSidebarCollapsed);
  }

  changeCurrentProject(projectId: string): void {
    this.store.dispatch(setCurrentProject({ projectId }));
  }

  openCreateIssueModal() {
    this.modalService.create({
      nzTitle: 'Create Issue',
      nzContent: IssueCreateModalComponent,
      nzFooter: null,
      nzKeyboard: false,
      nzMaskClosable: false
    });
  }

  ngOnDestroy(): void {
    this.subsNotifier.next();
    this.subsNotifier.complete();
  }

}
