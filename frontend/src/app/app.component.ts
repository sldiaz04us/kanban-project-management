import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { NavigationService } from '@features/navigation/services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private subsNotifier = new Subject();

  isSidebarCollapsed = false;

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.sidebarCollapseStatusChanged$.pipe(takeUntil(this.subsNotifier)).subscribe(collapseStatus => this.isSidebarCollapsed = collapseStatus);
  }

  ngOnDestroy(): void {
    this.subsNotifier.next();
    this.subsNotifier.complete();
  }
}
