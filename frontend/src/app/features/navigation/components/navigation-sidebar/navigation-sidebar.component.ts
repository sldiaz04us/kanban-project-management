import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-navigation-sidebar',
  templateUrl: './navigation-sidebar.component.html',
  styleUrls: ['./navigation-sidebar.component.scss']
})
export class NavigationSidebarComponent implements OnInit, OnDestroy {
  private subsNotifier = new Subject();

  isCollapsed = false;

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.sidebarCollapseStatusChanged$.pipe(takeUntil(this.subsNotifier)).subscribe(collapseStatus => this.isCollapsed = collapseStatus);
  }

  ngOnDestroy(): void {
    this.subsNotifier.next();
    this.subsNotifier.complete();
  }
}
