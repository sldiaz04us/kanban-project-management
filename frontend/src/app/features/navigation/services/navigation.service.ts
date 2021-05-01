import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private sidebarCollapseStatusSubject = new Subject<boolean>();
  sidebarCollapseStatusChanged$: Observable<boolean>;

  constructor() {
    this.sidebarCollapseStatusChanged$ = this.sidebarCollapseStatusSubject.asObservable();
  }

  collapseSidebar(collapseStatus: boolean): void {
    this.sidebarCollapseStatusSubject.next(collapseStatus);
  }
}
