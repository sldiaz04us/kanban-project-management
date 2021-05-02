import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-navigation-toolbar',
  templateUrl: './navigation-toolbar.component.html',
  styleUrls: ['./navigation-toolbar.component.scss']
})
export class NavigationToolbarComponent implements OnInit, OnDestroy{
  private subsNotifier = new Subject();
  
  isSidebarCollapsed = false;

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.sidebarCollapseStatusChanged$.pipe(takeUntil(this.subsNotifier)).subscribe(collapseStatus => this.isSidebarCollapsed = collapseStatus);
  }

  onCollapseSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    this.navigationService.collapseSidebar(this.isSidebarCollapsed);
  }

  ngOnDestroy(): void {
    this.subsNotifier.next();
    this.subsNotifier.complete();
  }

}
