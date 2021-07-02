import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { NavigationService } from '@features/navigation/services/navigation.service';
import { Project } from '@core/interfaces/project';
import { getCurrentProject } from '@features/project/state/project.selectors';

@Component({
  selector: 'app-navigation-sidebar',
  templateUrl: './navigation-sidebar.component.html',
  styleUrls: ['./navigation-sidebar.component.scss']
})
export class NavigationSidebarComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  currentProject: Project;

  isCollapsed = false;

  constructor(private navigationService: NavigationService, private store: Store) { }

  ngOnInit(): void {
    this.navigationService.sidebarCollapseStatusChanged$.pipe(takeUntil(this.destroy$)).subscribe(collapseStatus => this.isCollapsed = collapseStatus);
    this.store.select(getCurrentProject).pipe(takeUntil(this.destroy$)).subscribe(currentProject => this.currentProject = currentProject);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
